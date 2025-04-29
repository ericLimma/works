import { langToggle } from './modules/LangToggle.js';
import { menu } from './modules/Menu.js';
import { createSlider } from './modules/Slider.js';

document.addEventListener('DOMContentLoaded', () => {
        menu();
        createSlider()
        langToggle();
})