# Extraction Economy - Pause/Resume Bug Fix

## Problem Description
The game starts but remains stuck in "HALTED" state with no way to resume gameplay. The initial onboarding memo appears, but after resolving it, the game doesn't automatically start.

## Root Cause Analysis
1. **Initial State**: `current_speed = 0` (paused) when the page loads
2. **Init Sequence**: 
   - `init()` immediately calls `trigger_interactive_memo()` 
   - This saves `state.last_speed = current_speed` (which is 0)
   - Shows the onboarding modal with "Initialize Terminal" button
3. **Resolution Logic Bug**:
   - When user clicks "Initialize Terminal", `resolve_memo()` runs
   - It checks: `if(state.last_speed > 0 && !state.over)`
   - Since `state.last_speed` is 0, this condition fails
   - Game remains paused with no automatic restart

## Solution Options

### Option A: Fix in Onboarding Memo Action (Recommended)
Modify the "Initialize Terminal" button's action to explicitly start the game:

```javascript
{text:"Initialize Terminal", 
 action:function() { 
     set_speed(2500); // Start at 1X speed (2.5 seconds per tick)
     return "DECISION: Terminal Initialized and running."; 
 }}
```

### Option B: Modify resolve_memo Logic
Update the memo resolution to automatically resume if this is the first-time startup:

```javascript
if(state.last_speed > 0 && !state.over) { 
    set_speed(state.last_speed); 
} else if (!memo.triggered && state.month === 1) {
    // First-time startup: auto-resume at default speed
    set_speed(2500);
}
```

### Option C: Separate Init and Start Logic
Change `init()` to set an initial speed after showing the memo, rather than relying on memo resolution:

```javascript
// In init(), after trigger_interactive_memo():
setTimeout(() => {
    if (!state.over && !state.modal_active) {
        set_speed(2500); // Auto-start at 1X
    }
}, 100);
```

## Implementation Recommendation
**Option A** is the most straightforward and user-friendly fix because:
- It makes the "Initialize Terminal" button clearly do what it says
- It provides explicit feedback that the terminal is both initialized AND running
- It requires minimal code changes (just one function call added)
- It avoids hidden logic that might confuse future debugging

## Testing Steps
1. Load the page - onboarding memo should appear
2. Click "Initialize Terminal" button
3. Verify:
   - Clock status shows "RUNNING" instead of "HALTED"
   - "1X" button is highlighted as active
   - Game loop begins executing (log messages appear)
   - All metrics update over time
