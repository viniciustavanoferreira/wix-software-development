const IMAGE_URL = 'https://static.wixstatic.com/media/784318_2e771eafcf7841de9345fdc88cd4a274~mv2.jpg';
const WHATSAPP_URI = 'https://api.whatsapp.com/send?phone=5519988351101';
const H2_TEXT = 'Texto H2';
const H3_1_TEXT = 'Texto H3_1';
const H3_2_TEXT = 'Texto H3_1';
const DEBUG_TEXT = 'Carregando - Custom Element \'custom-element\'.';

const createImage = () => {
	const imageElement = document.createElement('img');
	imageElement.src = IMAGE_URL;
	imageElement.id = 'whatsapp-image';
	return imageElement;
};

const createImageA = () => {
	const imageA = document.createElement('a');
	imageA.target = '_blank';
	imageA.href = WHATSAPP_URI;
	imageA.appendChild(createImage());
	return imageA;
};

const createImageContainer = () => {
	const imageContainer = document.createElement('div');
	imageContainer.id = 'whatsapp-container';
	imageContainer.appendChild(createImageA());
	return imageContainer;
};

const createH2 = () => {
	const h2Element = document.createElement('h2');
	h2Element.textContent = H2_TEXT;
	h2Element.id = 'wdce-h2';
	return h2Element;
};

const createH3 = (id, text) => {
	const h3Element = document.createElement('h3');
	h3Element.id = id;
	h3Element.textContent = text;
	return h3Element;
};

const createTextContainer = () => {
	const textContainer = document.createElement('div');
	textContainer.id = 'wdce-text-container';
	textContainer.appendChild(createH2());
	textContainer.appendChild(createH3('wdce-h3-1', H3_1_TEXT));
	textContainer.appendChild(createH3('wdce-h3-2', H3_2_TEXT));
	return textContainer;
};

const createStyle = () => {
	const styleElement = document.createElement('style');
	styleElement.innerHTML = `

    #whatsapp-container {
        width: 100%;
        max-width: 165px;
        display: flex;
        margin: 0 20px 0 5px;
        overflow: hidden;
        position: fixed;
    }

    #whatsapp-image {
        width: 60%;
        min-width: 100px;
        border-radius: 50%;
    }

//    #wdce-text-container {
//        display: flex;
//        flex-direction: column;
//        width: 65%;
//        justify-content: center;
//        max-width: 314px;
//        min-width: 200px;
//    }

//    #wdce-h2 {
//        font-family: 'HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif',
//        font-size: 16px;
//        font-weight: 500;
//        letter-spacing: 0.89px;
//        color: #32536a;
//        margin: 0 0 16px 0;
//    }

//    #wdce-h3-1, #wdce-h3-2 {
//        font-family: 'HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif',
//        font-size: 14px;
//        font-weight: 300;
//        line-height: 1.43;
//        color: #162d3d;
//        margin: 0 0 8px 0;
//    }
    `;
	return styleElement;
};

class WixDefaultCustomElement extends HTMLElement {
	constructor() {
		super();
		console.log(DEBUG_TEXT);
	}

	connectedCallback() {
		this.appendChild(createStyle());
		this.appendChild(createImageContainer());
		//this.appendChild(createTextContainer());
	}

}
customElements.define('whatsapp-element', WixDefaultCustomElement);