import { client } from "@gradio/client"; 
const app:any = client("https://xxxx.gradio.live"); // put the app url here!!




async function main(){
    // print the api method
    const app_info = await app.view_info(); 
    console.log(app_info)

    // test the api
    
}

main().then(() => {
    console.log('end');
});