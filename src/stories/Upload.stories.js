import Upload from '../components/Upload';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Upload',
  component: Upload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Upload {...args}>
    <button>Click me</button>
  </Upload>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const Template2 = (args) => (
  <Upload {...args}>
    {(file) => <button>{file ? file.name : 'Click me'}</button>}
  </Upload>
);

export const AccessFile = Template2.bind({});

const Template3 = () => (
  <Upload droppable>
    {
      (file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? 'black' : '#aaa',
          }}
        >
          {file ? file.name : 'Click or Drag file to this area to upload'}
        </div>
      )
    }
  </Upload>
);

export const Droppable = Template3.bind({});
