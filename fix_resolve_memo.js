// FIX OPTION B: Modify resolve_memo to auto-start on first-time initialization

// Find the resolve_memo function (around line 500-540)
/*
function resolve_memo(option_index) {
    try {
        let result_text = "DECISION: Acknowledged.";
        
        if (option_index >= 0 && 
            current_memo && 
            current_memo.options && 
            Array.isArray(current_memo.options) &&
            current_memo.options[option_index]) {
            
            // Execute action with error handling
            try {
                result_text = current_memo.options[option_index].action();
            } catch(action_error) {
                console.error("Memo action error:", action_error);
                result_text = "ERROR: Action failed - see console";
            }
        }
        
        state.inbox.unshift({ 
            title: current_memo ? current_memo.title : "Unknown Memo", 
            text: (current_memo && current_memo.text ? current_memo.text + "\n\n---------------------------\n" : "") + result_text, 
            read: false, date: "Month " + state.month 
        });
        state.unread++;
        state.inbox = state.inbox.slice(0, 50); 
        
        let modal_el = document.getElementById('modal');
        if (modal_el) modal_el.style.display = 'none';
        
        current_memo = null;
        
        if(state.last_speed > 0 && !state.over) { 
            set_speed(state.last_speed); 
        } else {
            console.log("Game remains paused after memo resolution");
        }
        
        update_ui();
    } catch(e) {
        console.error("resolve_memo error:", e);
        alert("Memo resolution failed - see console for details");
    }
}
*/

// REPLACE THE RESOLUTION LOGIC WITH THIS:
if(state.last_speed > 0 && !state.over) { 
    set_speed(state.last_speed); 
} else if (!current_memo || current_memo.id === "onboarding") {
    // Auto-start the game on first-time initialization
    set_speed(2500);
} else {
    console.log("Game remains paused after memo resolution");
}

// This change makes resolve_memo automatically start the game when:
// 1. The memo is the special "onboarding" memo, OR
// 2. current_memo is null (edge case handling)
// Otherwise it behaves as before (stays paused if last_speed was 0)
