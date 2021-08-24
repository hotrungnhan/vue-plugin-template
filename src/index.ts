import { App } from "vue"
import plugin from "@/components/Hello.vue"
export default {
    install: (app: App, options: any) => {
        /* declare global component */
        app.component('Hello', plugin)
    }
}
