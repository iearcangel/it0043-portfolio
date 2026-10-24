# M5 Specification

## 1. Navigation Toggle

### Trigger
The user clicks the navigation toggle button to open or close the menu.

### Expected DOM Change
- The navigation menu becomes visible when opened.
- The navigation menu becomes hidden when closed.
- The toggle button's expanded state reflects whether the menu is open.
- Clicking a navigation link closes the menu and navigates to the selected page.
- When the screen changes from mobile to desktop, the desktop navigation appears normally.

### Edge Cases
- Clicking the toggle button repeatedly should open and close the menu correctly.
- Clicking outside the open menu closes it.
- Clicking a navigation link closes the menu.
- Resizing the browser from mobile to desktop restores the normal desktop navigation.
- The menu should remain usable on small screens.

### Pseudocode
1. Start.
2. Locate the navigation menu and toggle button.
3. Wait for the user to interact with the menu.
4. If the user clicks the toggle button, check whether the menu is open.
5. If the menu is closed, display it and update the button's expanded state.
6. Otherwise, hide the menu and update the button's expanded state.
7. If the user clicks outside the open menu, close the menu and update the button's state.
8. If the user clicks a navigation link, close the menu and navigate to the selected page.
9. If the screen changes from mobile to desktop, display the desktop navigation normally.
10. End.

---

## 2. Dark Mode

### Trigger
The user clicks the dark mode toggle button to switch between light mode and dark mode.

### Expected DOM Change
- The page background, text, and other relevant elements change to