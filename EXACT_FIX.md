// EXACT FIX TO APPLY: Modified onboarding memo with auto-start

// Locate this section in your HTML file (around line 450-460):
/*
state.memos_deck.push({
    id: "onboarding", condition: function(){ return false; }, 
    title: "[BOARD] Fiduciary Duty", 
    text: "You are the newly appointed CEO of Cander Creative. \n\nCapitalism relies on competition. The Board wants you to <b>destroy competition</b>. Build a digital toll booth. Destroy interoperability. Weaponize switching costs. \n\nAlternatively, you may attempt to survive the pure Free Market, relying entirely on volume, innovation, and merit without building a cage. \n\nThe Board expects Month-over-Month profit growth regardless of your path. Do not miss your targets.",
    options: [{text:"Initialize Terminal", action:function() { return "DECISION: Terminal Initialized."; } }], 
    triggered: true
});
*/

// REPLACE THE ENTIRE SECTION WITH THIS FIXED VERSION:
state.memos_deck.push({
    id: "onboarding", condition: function(){ return false; }, 
    title: "[BOARD] Fiduciary Duty", 
    text: "You are the newly appointed CEO of Cander Creative. \n\nCapitalism relies on competition. The Board wants you to <b>destroy competition</b>. Build a digital toll booth. Destroy interoperability. Weaponize switching costs. \n\nAlternatively, you may attempt to survive the pure Free Market, relying entirely on volume, innovation, and merit without building a cage. \n\nThe Board expects Month-over-Month profit growth regardless of your path. Do not miss your targets.",
    options: [{
        text: "Initialize Terminal", 
        action: function() { 
            set_speed(2500); // Start at 1X speed (2.5 seconds per tick)
            return "DECISION: Terminal Initialized and running."; 
        }
    }], 
    triggered: true
});

// This ensures that clicking "Initialize Terminal" will:
// 1. Execute set_speed(2500) to start the game loop
// 2. Update UI buttons to show "RUNNING" status
// 3. Highlight the "1X" button as active
// 4. Log the confirmation message
