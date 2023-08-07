const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Store the deferred prompt

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();

  // Store the event to be used later
  deferredPrompt = event;

  // Show the installation button
  butInstall.classList.toggle('hidden', false) 
});

// Click event handler for the "Install" button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;

    if (result.outcome === 'accepted') {
      console.log('User accepted the installation prompt.');
    } else {
      console.log('User dismissed the installation prompt.');
    }

    // Clear the deferred prompt
    deferredPrompt = null;

    // Hide the installation button
    butInstall.style.display = 'none';
  }
});

// Event handler for the "appinstalled" event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed.', event);
});
