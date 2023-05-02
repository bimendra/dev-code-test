import { Tabs } from 'flowbite-react';

export default function Auth() {
  return (
    <Tabs.Group aria-label="Sign in or Register as a new user">
      <Tabs.Item title="Sign in">Sign in</Tabs.Item>
      <Tabs.Item title="Sign up">Sign up</Tabs.Item>
    </Tabs.Group>
  );
}
