import { defineComponent, PropType, reactive } from 'vue';

export default defineComponent({
  name: 'MDEditorToolbar',
  setup() {
    return () => (
      <div class="bf-toolbar">
        <ul class="bf-toolbar-left">
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-bold"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-italic"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-xiahuaxian"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-strikethrough"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-title"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-baojiaquotation2"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-unorderedList"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-orderedList"></use>
            </svg>
          </li>

          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-daima"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-daima1"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-link"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-image"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-table"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-chexiao"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-baocun"></use>
            </svg>
          </li>
        </ul>
        <ul class="bf-toolbar-right">
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-fangda"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-fullScreen"></use>
            </svg>
          </li>

          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-subColumn"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-mulu"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-bangzhu"></use>
            </svg>
          </li>
          <li>
            <svg class="bf-icon" aria-hidden="true">
              <use xlinkHref="#icon-github"></use>
            </svg>
          </li>
        </ul>
      </div>
    );
  }
});
