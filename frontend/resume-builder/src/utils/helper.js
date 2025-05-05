export const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}; 

// Get Lightest average color
export const getLightColorFromImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
        // Check validity of imageUrl
        if(!imageUrl || typeof imageUrl !== "string") {
            return reject(new Error("Invalid image URL"));
        }

        const img = new Image();

        // If not a base64 string, set crossOrigin (imp for CORS)
        if(!imageUrl.startsWith('data:')) {
            img.crossOrigin = 'anonymous';
        }

        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let r = 0;
            let g = 0;
            let b = 0;
            let count = 0;
            
            for (let i = 0; i < imageData.length; i+=4) {
                const red = imageData[i];
                const green = imageData[i+1];
                const blue = imageData[i+2];
                const brightness = (red + green + blue) / 3;

                if(brightness > 180) {
                    r += red;
                    g += green;
                    b += blue;
                    count++;
                }
            }

            if(count === 0) {
                resolve("#ffffff");
            } else {
                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);
                resolve(`rgb(${r},${g},${b})`);
            }
        };

        img.onerror = (e) => {
            console.error('❌ Failed to load image:', e);
            reject(new Error("Image could not be loaded or is blocked by CORS."));
        }
    }
)}