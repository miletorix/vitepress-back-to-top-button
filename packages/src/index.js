// import BackToTopButton from './BackToTopButton.vue'
// export default BackToTopButton
// export { BackToTopButton }
import { createVNode, render } from 'vue';
import BackToTopButton from './BackToTopButton.vue';
export default function install(app, options = {}) {
    if (typeof window === 'undefined')
        return;
    const el = document.createElement('div');
    el.id = 'back-to-top-container';
    document.body.appendChild(el);
    const vnode = createVNode(BackToTopButton, {
        progressColor: options.progressColor || '#42b983',
        textColor: options.textColor,
        arrowSvg: options.arrowSvg
    });
    render(vnode, el);
}
