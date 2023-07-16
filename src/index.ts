
import { config } from "../config";
import * as my_interface from "./my_definition/interfaces";

import * as read_ai from "./my_fn/read_ai";
async function main(){
    let inputData: my_interface.GradioInput = {
        input_type_for_style: 'Image',
        input_type_for_sketch: 'Image',
        input_type_for_color: 'Nothing',
        input_type_for_depth: 'Nothing',
        input_type_for_canny: 'Nothing',
        style_image: './test_data/style.png',
        sketch_image: './test_data/sketch.jpg',
        color_image: './test_data/color.png',
        depth_image: './test_data/depth.png',
        canny_image: './test_data/canny.png',
        condition_weight: 3,
        prompt: 'prompt text',
        negative_prompt: 'negative prompt text',
        guidance_scale_classifier_free_guidance: 5,
        num_samples: 3,
        seed: 1234,
        steps: 50,
        image_resolution: 640,
        timestamp_parameter_that_determines_until_which_step_the_adapter_is_applied: 0.5,
    }
    // console.log('start')
    await read_ai.send_data(inputData, config.gradio_ulr);
    
}
main().then(() => {
  console.log('end');
});