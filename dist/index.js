"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@gradio/client");
const app = (0, client_1.client)("https://xxxx.gradio.live"); // put the app url here!!
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // print the api method
        const app_info = yield app.view_info();
        console.log(app_info);
        // test the api
    });
}
main().then(() => {
    console.log('end');
});
