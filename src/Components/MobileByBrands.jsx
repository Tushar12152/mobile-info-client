import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mobiles from './mobiles';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MobileByBrands = () => {

  const axiosSecure=useAxiosSecure()


  const { data: mobiles = [] } = useQuery({
    queryKey: ['mobile'],
    queryFn: async () => {
      const res = await axiosSecure.get('/mobiles');
      return res.data;
    },
  });

  const Samsung=mobiles.filter(mobile=>mobile?.brand==='Samsung')
  const Apple=mobiles.filter(mobile=>mobile?.brand==='Apple')
  const VIVO=mobiles.filter(mobile=>mobile?.brand==='VIVO')
  const OPPO=mobiles.filter(mobile=>mobile?.brand==='OPPO')
  const NOKIA=mobiles.filter(mobile=>mobile?.brand==='NOKIA')
  const onePlus=mobiles.filter(mobile=>mobile?.brand==='onePlus')
  const Motorola=mobiles.filter(mobile=>mobile?.brand==='Motorola')
  const Huawei=mobiles.filter(mobile=>mobile?.brand==='Huawei')
  const LG=mobiles.filter(mobile=>mobile?.brand==='LG')
  const Google=mobiles.filter(mobile=>mobile?.brand==='Google')
  const Infinix=mobiles.filter(mobile=>mobile?.brand==='Infinix')
  const Tesla=mobiles.filter(mobile=>mobile?.brand==='Tesla')
  const Lava=mobiles.filter(mobile=>mobile?.brand==='Lava')
  const htc=mobiles.filter(mobile=>mobile?.brand==='htc')
  const Sony=mobiles.filter(mobile=>mobile?.brand==='Sony')

  // console.log(htc);

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
      
      <Tab>One Plus</Tab>
      <Tab>Motorola</Tab>
      <Tab>Huawei</Tab>
      <Tab>LG</Tab>
      <Tab>Google</Tab>
      <Tab>Infinix</Tab>
      
      <Tab>Tesla</Tab>
      <Tab>Lava</Tab>
      <Tab>htc</Tab>
      <Tab>Sony</Tab>
    </TabList>

    <TabPanel>
     
      <Mobiles mobiles={mobiles}></Mobiles>
    </TabPanel>

    <TabPanel>
      <Mobiles mobiles={Samsung} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Apple} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={VIVO} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={OPPO} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={NOKIA} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={onePlus} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Motorola} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Huawei} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={LG} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Google} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Infinix} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Tesla} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Lava} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={htc} />
    </TabPanel>
    <TabPanel>
      <Mobiles mobiles={Sony} />
    </TabPanel>

  </Tabs>
        </div>
    );
};

export default MobileByBrands;