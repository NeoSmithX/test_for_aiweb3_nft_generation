
import * as my_interface from "../my_definition/interfaces";
import * as fs from 'fs';
// let input_temp = 
export const convert_image_to_base64 = (image_path: string):string => {
    const imageFile = fs.readFileSync(image_path);
    const base64_image = Buffer.from(imageFile).toString('base64');
    return base64_image;
}
const data_temp = {
    input_type_for_style: 'Image',
    input_type_for_sketch: 'Image',
    input_type_for_color: 'Nothing',
    input_type_for_depth: 'Nothing',
    input_type_for_canny: 'Nothing',
    style_image: convert_image_to_base64('src/test_files/style.png'),
    sketch_image: convert_image_to_base64('src/test_files/sketch.jpg'),
    color_image: convert_image_to_base64('src/test_files/color.png'),
    depth_image: convert_image_to_base64('src/test_files/depth.png'),
    canny_image: convert_image_to_base64('src/test_files/canny.png'),
    condition_weight: 3,
    prompt: 'prompt text',
    negative_prompt: 'negative prompt text',
    guidance_scale_classifier_free_guidance: 5,
    num_samples: 3,
    seed: 1234,
    steps: 50,
    image_resolution: 640,
    timestamp_parameter_that_determines_until_which_step_the_adapter_is_applied: 0.5,
    fn_index: 5
};
export async function send_data(input: my_interface.GradioInput, url:string): Promise<void> {
    const response = await fetch(url + '/api/predict/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_temp),
        // body: JSON.stringify({
        //     "data":input,
        //     "fn_index":0
        // }),
    });
    console.log('response:')
    console.log(response)
    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse); // Handle the response data as needed.
    } else {
        console.log(`HTTP error! status: ${response.status}`);
    }
}

