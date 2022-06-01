import Spacer from '../components/Spacer';

export default {
  title: 'Component/Spacer',
  component: Spacer,
  argTypes: {
    size: {
      defaultValue: 8,
      control: {
        type: 'range',
        min: 8,
        max: 64,
      },
    },
  },
};

// eslint-disable-next-line react/prop-types
const Box = ({ block }) => {
  return (
    <div
      style={{
        display: block ? 'block' : 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: 'blue',
      }}
    />
  );
};

const Template = (args) => (
  <Spacer {...args}>
    <Box />
    <Box />
    <Box />
  </Spacer>
);

export const Horizontal = Template.bind({});

Horizontal.args = { type: 'horizontal' };

export const Vertical = Template.bind({});

Vertical.args = { type: 'vertical' };

// export const Horizontal = (args) => {
//   return (
//     <Spacer {...args} type="horizontal">
//       <Box />
//       <Box />
//       <Box />
//     </Spacer>
//   );
// };
