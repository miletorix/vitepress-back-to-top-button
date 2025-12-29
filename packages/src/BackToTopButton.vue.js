/// <reference types="C:/Users/user1/Desktop/vitepress-back-to-top-button/packages/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/user1/Desktop/vitepress-back-to-top-button/packages/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps();
const isDark = ref(false);
const isMounted = ref(false);
const isVisible = ref(false);
const scrollProgress = ref(0);
let scrollListener = null;
const ticking = ref(false);
const updateDark = () => {
    isDark.value = document.documentElement.classList.contains('dark');
};
const updateScroll = () => {
    if (!ticking.value) {
        requestAnimationFrame(() => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            let progress = (scrollTop / scrollHeight) * 100;
            if (progress >= 99.5)
                progress = 100;
            scrollProgress.value = Math.min(100, Math.max(0, progress));
            isVisible.value = scrollTop > 100;
            ticking.value = false;
        });
        ticking.value = true;
    }
};
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
onMounted(() => {
    isMounted.value = true;
    updateDark();
    updateScroll();
    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });
    scrollListener = () => updateScroll();
    window.addEventListener('scroll', scrollListener);
});
onUnmounted(() => {
    if (scrollListener) {
        window.removeEventListener('scroll', scrollListener);
    }
});
const circlePath = `M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`;
const defaultArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" fill-rule="evenodd">
		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L12 10.414l-4.95 4.95a1 1 0 0 1-1.414-1.414z" />
	</g>
</svg>`;
const arrowSvg = props.arrowSvg || defaultArrowSvg;
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-icon']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Teleport | typeof __VLS_components.Teleport} */
Teleport;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "body",
}));
const __VLS_2 = __VLS_1({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.scrollToTop) },
    ...{ class: "back-to-top-button" },
    ...{ class: ({ visible: __VLS_ctx.isVisible }) },
    ...{ style: ({
            '--progress': __VLS_ctx.scrollProgress + '%',
            '--progress-color': __VLS_ctx.progressColor,
            '--button-bg': __VLS_ctx.isDark ? '#1e1e1e' : '#fff',
            '--text-color': __VLS_ctx.textColor || (__VLS_ctx.isDark ? '#fff' : '#000')
        }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isMounted) }, null, null);
/** @type {__VLS_StyleScopedClasses['back-to-top-button']} */ ;
/** @type {__VLS_StyleScopedClasses['visible']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "progress-ring" },
    viewBox: "0 0 36 36",
});
/** @type {__VLS_StyleScopedClasses['progress-ring']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    ...{ class: "progress-bg" },
    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
});
/** @type {__VLS_StyleScopedClasses['progress-bg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    ...{ class: "progress-bar" },
    d: (__VLS_ctx.circlePath),
    'stroke-dasharray': (`${__VLS_ctx.scrollProgress}, 100`),
});
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
if (__VLS_ctx.scrollProgress < 100) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "progress-text" },
    });
    /** @type {__VLS_StyleScopedClasses['progress-text']} */ ;
    (Math.floor(__VLS_ctx.scrollProgress));
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "progress-icon" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.arrowSvg) }, null, null);
    /** @type {__VLS_StyleScopedClasses['progress-icon']} */ ;
}
// @ts-ignore
[scrollToTop, isVisible, scrollProgress, scrollProgress, scrollProgress, scrollProgress, progressColor, isDark, isDark, textColor, isMounted, circlePath, arrowSvg,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
