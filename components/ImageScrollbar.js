import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu style={{ overflow: 'hidden' }} >
      {data.map((item) => (
        <Box width='910px' key={item.id} overflow='hidden' p='1'>
          <Image alt="" placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
    </ScrollMenu>
  );
}