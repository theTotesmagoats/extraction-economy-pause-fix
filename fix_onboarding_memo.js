// FIX OPTION A: Modify the onboarding memo to start the game

// Find this section in your code (around line 450-460):
/*
state.memos_deck.push({
    id: "onboarding", condition: function(){ return false; }, title: "[BOARD] Fiduciary Duty", 
    text: "You are the newly appointed CEO of Cander Creative. \n\nCapitalism relies on competition. The Board wants you to <b>destroy competition</b>. Build a digital toll booth. Destroy interoperability. Weaponize switching costs. \n\nAlternatively, you may attempt to survive the pure Free Market, relying entirely on volume, innovation, and merit without building a cage. \n\nThe Board expects Month-over-Month profit growth regardless of your path. Do not miss your targets.",
    options: [{text:"Initialize Terminal", action:function() { return "DECISION: Terminal Initialized."; } }], triggered: true
});
*/

// REPLACE THE ACTION FUNCTION WITH THIS:
options: [{
    text: "Initialize Terminal", 
    action: function() { 
        set_speed(2500); // Start at 1X speed (2.5 seconds per tick)
        return "DECISION: Terminal Initialized and running."; 
    }
}]

// This ensures that clicking "Initialize Terminal" will:
// 1. Show the confirmation text in the log
// 2. Set current_speed to 2500ms, which starts the game loop
// 3. Update UI buttons to show "RUNNING" status
