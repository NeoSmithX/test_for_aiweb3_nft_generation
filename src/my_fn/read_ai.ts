
import * as my_interface from "../my_definition/interfaces";
export async function send_data(input: my_interface.GradioInput, url:string): Promise<void> {
    const response = await fetch(url + '/api/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"inputs":input}),
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