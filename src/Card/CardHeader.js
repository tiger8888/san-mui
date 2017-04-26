/**
 * @file Card component
 * @author hanbingbing@baidu.com
 */

import san from 'san';
import {create} from '../common/util/cx';

const cx = create('card-header');

export default san.defineComponent({
    template: `
        <div class="{{styleClass}}">
            <slot name="avatar"></slot>
            <div class="${cx.getPartClassName('title-wrap')}" san-if="title || subTitle">
                <div class="${cx.getPartClassName('title')} {{titleClass}}">
                    {{title}}
                </div>
                <div class="${cx.getPartClassName('sub-title')} {{subTitleClass}}" san-if="subTitle">
                    {{subTitle}}
                </div>
                <slot name="title-after"></slot>
            </div>
            <slot name="after"></slot>
        </div>
    `,

    initData() {
        return {
            styleClass: cx(this).build(),
            title: '', // 标题
            subTitle: '', // 副标题
            titleClass: '', // 标题样式
            subTitleClass: '' // 副标题样式
        };
    }
});
