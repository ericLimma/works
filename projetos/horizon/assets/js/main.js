import { langToggle } from './modules/LangToggle.js';
import { menu } from './modules/Menu.js';
import { createSlider } from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
        menu();
        createSlider()
        langToggle();
})