import Jimp from 'jimp';

const generateLogo = async (projectName: string) => {
    const firstLetter = projectName.charAt(0).toUpperCase();
    
    const image = new Jimp(256, 256, '#000000'); // Create a white background image
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE); // Load font

    image.print(font, 0, 0, {
        text: firstLetter,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 256, 256);
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    return `data:image/png;base64,${buffer.toString('base64')}`;
};

export { generateLogo }