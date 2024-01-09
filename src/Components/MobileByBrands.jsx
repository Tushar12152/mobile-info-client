import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mobiles from './mobiles';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MobileByBrands = () => {

  const axiosSecure=useAxiosSecure()


  const { data: mobiles = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosSecure.get('/mobiles');
      return res.data;
    },
  });

    return (
        <div className='border-t mt-10 border-black'>
             <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Samsung</Tab>
      <Tab>Apple</Tab>
      <Tab>VIVO</Tab>
      <Tab>OPPO</Tab>
      <Tab>NOKIA</Tab>
      <Tab>Real Me</Tab>
      <Tab>One Plus</Tab>
      <Tab>Motorola</Tab>
      <Tab>Huawei</Tab>
      <Tab>LG</Tab>
      <Tab>Google</Tab>
      <Tab>Infinix</Tab>
      <Tab>Techno</Tab>
      <Tab>Tesla</Tab>
      <Tab>Lava</Tab>
      <Tab>htc</Tab>
      <Tab>Sony</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      <Mobiles mobiles={mobiles}></Mobiles>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default MobileByBrands;