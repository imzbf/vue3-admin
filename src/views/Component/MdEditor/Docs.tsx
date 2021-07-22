import { defineComponent } from 'vue';
import { Typography, TypographyTitle, TypographyParagraph } from 'ant-design-vue';
import FeCard from '@/components/Card';
export default defineComponent({
  render() {
    return (
      <FeCard>
        <Typography>
          <TypographyTitle level={2}>md-editor-v3</TypographyTitle>
          <TypographyParagraph>
            Markdown编辑器，基于vue3，使用jsx和typescript语法开发，支持切换主题、prettier美化文本等。
          </TypographyParagraph>
          <TypographyParagraph>
            在线文档：<a href="https://imzbf.github.io/md-editor-v3">md-editor-v3</a>
            ，github仓库：<a href="https://github.com/imzbf/md-editor-v3">md-editor-v3</a>
            。
          </TypographyParagraph>
        </Typography>
      </FeCard>
    );
  }
});
