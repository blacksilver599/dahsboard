import { Pie } from 'react-chartjs-2';
const SalesDistributionChart = ({ data }) => (
  <Pie data={data} options={{ responsive: true, animation: { animateScale: true } }} />
);

useEffect(() => {
    axios.get('/api/sales-data').then((response) => setSalesData(response.data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch updated data every 10 seconds
      axios.get('/api/active-users').then((response) => setActiveUsers(response.data));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const SalesChart = React.lazy(() => import('./SalesChart'));

  const MemoizedChart = React.memo(() => <SalesChart data={salesData} />);

  import { motion } from 'framer-motion';
const Card = ({ children }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
    {children}
  </motion.div>
);

const chartOptions = {
    animation: {
      duration: 1000,
      easing: 'easeInOutBounce',
    },
  };

  {isLoading ? <SkeletonLoader /> : <SalesOverview data={salesData} />}

  <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
  <div key="sales-overview" data-grid={{ x: 0, y: 0, w: 4, h: 2 }}>
    <SalesOverview />
  </div>
  <div key="revenue-updates" data-grid={{ x: 4, y: 0, w: 4, h: 2 }}>
    <RevenueUpdates />
  </div>
</GridLayout>

import { useTranslation } from 'react-i18next';
const { t } = useTranslation();
return <h1>{t('sales_overview')}</h1>;
