import { createApp } from "../../static/Vue/VueJS/vue.esm-browser.js";

const vm = createApp({
    data() {
        return {

            //7.2 Single text input start
            singleMessage: "haha",
            //7.2 Single text input end

            //7.3 Multi-line text input start
            multilineMessage: 'hahahaha',
            //7.3 Multi-line text input end

            //7.4.1 Checkbox start
            checked: false,
            //7.4.1 Checkbox end

            //7.4.2 Multi checkbox start
            checkedNames: [],
            //7.4.2 Multi checkbox end

            //7.5 Radio button start
            picked: '',
            //7.5 Radio button end

            //7.6.1(7.6.2)[7.6.3, 7.7.3] Single(Multi) select box start
            selected: [],
            //7.6.1(7.6.2)[7.6.3, 7.7.3] Single(Multi) select box end

            //7.6.3 Use v-for start
            options: [
                { text: '课程1', value: 'Java开发班' },
                { text: '课程2', value: 'Python开发班' },
                { text: '课程3', value: '前端开发班' },
            ],
            //7.6.3 Use v-for end

            //7.7.1 Checkbox start
            toggle: 'false',
            //7.7.1 Checkbox end

            //7.7.2 Radio button start
            date: '苹果',
            pick: '未选择',
            //7.7.2 Radio button end

            //7.8.1 Use lazy start
            lazyMessage: '',
            //7.8.1 Use lazy end

            //7.8.2(7.8.3) Use number(trim) start
            val: '',
            //7.8.2(7.8.3) Use number(trim) end

            //7.9 start
            user: {
                userName: '',
                pwd: '',
                gender: 'female',
                hobbys: [],
                selCityId: '',
                desc: '',
            },
            citys: [{id: 1, name: "北京"}, {id: 2, name: "上海"}, {id: 3, name: "广州"}],
            //7.9 end

        }
    },
    methods: {
        //7.9 start
        handleSubmit(event) {
            console.log(JSON.stringify(this.user));
        },
        //7.9 end
    },
}).mount('#vueApp');
