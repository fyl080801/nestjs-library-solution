import { createApp, h } from 'vue';

const app = createApp({
  setup() {
    return h('div', { innerText: 'div' });
  },
});

app.mount('#app');
