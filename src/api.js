import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt: `black and white line art, coloring book style, clean outlines, no shading, simple black lines on white background, detailed linework suitable for coloring: ${prompt}`,
            width: 1024,
            height: 1024,
            steps: 4, // Fixed: steps must be between 1 and 4
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating coloring sheet:', error);
        throw error;
    }
}