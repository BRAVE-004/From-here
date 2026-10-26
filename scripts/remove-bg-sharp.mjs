import sharp from "sharp";

const input = "C:/Users/Admin/Downloads/From here portfolio/public/images/about-blended.jpg";
const output = "C:/Users/Admin/Downloads/From here portfolio/public/images/about-blended-nobg.png";

async function removeBackground() {
  try {
    // Get image metadata first
    const metadata = await sharp(input).metadata();
    console.log(`Input: ${metadata.width}x${metadata.height}, channels: ${metadata.channels}, format: ${metadata.format}`);

    // Remove white/light background by making pixels with high brightness transparent
    // Using a threshold approach: pixels where all RGB channels are > threshold become transparent
    await sharp(input)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        const { width, height, channels } = info;
        const outputData = Buffer.alloc(data.length);
        
        for (let i = 0; i < data.length; i += channels) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = channels === 4 ? data[i + 3] : 255;
          
          // Calculate brightness
          const brightness = (r + g + b) / 3;
          const maxChannel = Math.max(r, g, b);
          const minChannel = Math.min(r, g, b);
          const colorDiff = maxChannel - minChannel;
          
          // If pixel is very light (high brightness) and low saturation (near grayscale/white)
          // OR if all channels are very high (near white)
          const isNearWhite = r > 220 && g > 220 && b > 220;
          const isLightLowSat = brightness > 200 && colorDiff < 40;
          const isVeryLight = brightness > 235;
          
          if (isNearWhite || isLightLowSat || isVeryLight) {
            // Make transparent
            outputData[i] = 0;
            outputData[i + 1] = 0;
            outputData[i + 2] = 0;
            outputData[i + 3] = 0;
          } else {
            outputData[i] = r;
            outputData[i + 1] = g;
            outputData[i + 2] = b;
            outputData[i + 3] = a;
          }
        }
        
        return sharp(outputData, {
          raw: { width, height, channels: 4 }
        })
        .png()
        .toFile(output);
      });
    
    console.log("Background removed successfully!");
    
    // Verify output
    const outMeta = await sharp(output).metadata();
    console.log(`Output: ${outMeta.width}x${outMeta.height}, channels: ${outMeta.channels}, hasAlpha: ${outMeta.hasAlpha}`);
    
  } catch (err) {
    console.error("Error:", err);
  }
}

removeBackground();