export interface GradioInput {
    input_type_for_style: string,
    input_type_for_sketch: string,
    input_type_for_color: string,
    input_type_for_depth: string,
    input_type_for_canny: string,
    style_image: string,
    sketch_image: string,
    color_image: string,
    depth_image: string,
    canny_image: string,
    condition_weight: number,
    prompt: string,
    negative_prompt: string,
    guidance_scale_classifier_free_guidance: number,
    num_samples: number,
    seed: number,
    steps: number,
    image_resolution: number,
    timestamp_parameter_that_determines_until_which_step_the_adapter_is_applied: number,
  }


  export interface Config{
    gradio_ulr: string,
  }