// FIX OPTION C: Auto-start the game after init() completes

// Find the end of the init() function (around line 470-510)
/*
function init() {
    // ... all your existing init code ...
    
    try {
        trigger_interactive_memo(state.memos_deck[state.memos_deck.length-1]);
    } catch(e) {
        console.error("init error:", e);
        alert("Game initialization failed - see console for details");
    }
    
    let label = document.getElementById('threat_label');
    if (label && state.comp_idx >= 0 && state.comp_idx < competitors.length) {
        try {
            if (competitors[state.comp_idx] && competitors[state.comp_idx].name) {
                label.innerText = competitors[state.comp_idx].name + " Threat";
            }
        } catch(e) {
            console.error("threat_label error:", e);
        }
    }
    
    render_high_scores();
    update_locks();
    update_ui();
}
*/

// ADD THIS AT THE END OF init(), BEFORE THE CLOSING BRACE:
    // Auto-start the game after onboarding memo is resolved
    setTimeout(function() {
        if (!state.over && !state.modal_active) {
            set_speed(2500); // Start at 1X speed (2.5 seconds per tick)
        }
    }, 100);

// This ensures that even if resolve_memo doesn't restart the game,
// it will automatically start within 100ms after init() completes.
