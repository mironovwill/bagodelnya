import { Flex, Link, Separator } from '@radix-ui/themes';

export const Footer = () => {
  const onClickTelegram = () => {
    window.open('https://t.me/bagodelnyaqa', '_blank');
  };

  return (
    <Flex direction="column" gap="2" p="2">
      <Separator style={{ width: '100%' }} />
      <Link color="gray" size="1" onClick={onClickTelegram} style={{ cursor: 'pointer' }}>
        Телеграм канал "Багодельня"
      </Link>
    </Flex>
  );
};
