import { defineComponent, reactive, UnwrapRef } from 'vue';
import {
  Form,
  FormItem,
  Input,
  Button,
  Switch,
  CheckboxGroup,
  Checkbox,
  Textarea
} from 'ant-design-vue';
import './style.less';
import { useStore } from 'vuex';
import { key } from '@/store';

import FeCard from '@/components/Card';
import { CloudUploadOutlined } from '@ant-design/icons-vue';

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

interface FormState {
  title: string;
  status: boolean;
  synopsisImage: string;
  synopsis: string;
  tags: Array<any>;
  content: string;
}

const fcp = 'form-def';

const tags = [
  'java',
  'javascript',
  'python',
  'jquery',
  'spring',
  'oracle',
  'mysql',
  'vue',
  'react',
  'webpack',
  'markdown',
  'html',
  'nginx',
  'git',
  'linux',
  'docker',
  'mac',
  'windows',
  'yarn',
  'npm',
  'redux',
  'shell',
  'nextjs',
  'go',
  'ai',
  'movie',
  'life',
  'lol',
  'server',
  'phone',
  'online',
  'weapp',
  'reg',
  'vscode',
  'typescript',
  'koa',
  'express',
  'es6',
  'bug'
];

const colors = [
  'color-orange',
  'color-gray',
  'color-green',
  'color-blue',
  'color-red',
  'color-purple',
  'color-white'
];

export default defineComponent({
  name: 'ViewForm',
  setup() {
    const article: UnwrapRef<FormState> = reactive({
      title: '',
      status: false,
      synopsisImage: '',
      synopsis: '',
      tags: [],
      content: ''
    });
    const onSubmit = () => {};

    const store = useStore(key);

    return () => (
      <div class={`${fcp}-demo view-space`}>
        <div class={`${fcp}-wrapper`}>
          <div class={`${fcp}-left`}>
            <FeCard border title="文章属性">
              <Form model={article} labelCol={{ span: 2 }} wrapperCol={{ span: 21 }}>
                <FormItem label="文章标题">
                  <Input
                    value={article.title}
                    onChange={(e) => (article.title = e.target.value)}
                  />
                </FormItem>
                <FormItem label="文章状态">
                  <Switch
                    checkedChildren="显示"
                    unCheckedChildren="隐藏"
                    checked={article.status}
                    onChange={(checked) => (article.status = checked as boolean)}
                  />
                </FormItem>
                <FormItem label="预览图">
                  <Input
                    value={article.synopsisImage}
                    onChange={(e) => (article.synopsisImage = e.target.value)}
                    addonAfter={<CloudUploadOutlined />}
                  />
                </FormItem>
                <FormItem label="文章概要">
                  <Textarea
                    value={article.synopsis}
                    type="textarea"
                    rows={4}
                    showCount
                    maxlength={1000}
                    onChange={(e) => (article.synopsis = e.target.value)}
                  />
                </FormItem>
                <FormItem wrapperCol={{ span: 14, offset: 2 }}>
                  <Button type="primary" onClick={onSubmit}>
                    发布
                  </Button>
                </FormItem>
              </Form>
            </FeCard>
          </div>
          <div class={`${fcp}-right`}>
            <FeCard border title="文章标签">
              <CheckboxGroup
                value={article.tags}
                onChange={(value) => (article.tags = value)}
              >
                {tags.map((tag) => (
                  <Checkbox
                    value={tag}
                    name="tags"
                    class={colors[Math.floor(Math.random() * colors.length)]}
                  >
                    {tag}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </FeCard>
          </div>
        </div>
        <div class={`${fcp}-content`}>
          <FeCard border title="正文编辑" bodyPadding={false}>
            <MdEditor
              editorClass={`${fcp}-editor`}
              theme={store.state.setting.theme === 'dark' ? 'dark' : 'light'}
              modelValue={article.content}
              onChange={(v: string) => (article.content = v)}
            />
          </FeCard>
        </div>
      </div>
    );
  }
});
