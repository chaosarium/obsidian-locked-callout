// created with help from ChatGPT
// no guranatees that this will not break things in the vault

import { Plugin } from 'obsidian';

export default class RemoveCalloutListenersPlugin extends Plugin {
    
    onload() {
        console.log('Loading Remove Callout Listeners Plugin');
        this.registerEvent(this.app.workspace.on('layout-change', this.removeCalloutListeners.bind(this)));
        this.registerEvent(this.app.workspace.on('active-leaf-change', this.removeCalloutListeners.bind(this)));
    }

    onunload() {
        console.log('Unloading Remove Callout Listeners Plugin');
    }

    removeCalloutListeners() {
        
        // find all callouts
        const callouts = document.querySelectorAll('div.cm-embed-block.cm-callout');
        console.log(callouts);

        // for some reason sometimes two listeners get added... but whatever
        callouts.forEach((callout) => {
            callout.addEventListener('click', (event) => {
                console.log('Callout clicked');
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
            });
        });
    }

}
