import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const DexPalPartnershipDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedGroups, setExpandedGroups] = useState(['Partnership Overview']);
  
  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(name => name !== groupName) 
        : [...prev, groupName]
    );
  };

  // Market data for charts
  const marketData = [
    { year: '2025', revenue: 3, volume: 16, users: 13500, dexs: 30 },
    { year: '2026', revenue: 15, volume: 88, users: 30000, dexs: 40 },
    { year: '2027', revenue: 55, volume: 283, users: 100000, dexs: 80 },
    { year: '2028', revenue: 125, volume: 650, users: 250000, dexs: 120 },
  ];

  const partnershipGrowth = [
    { month: 'Aug', partners: 5, volume: 2.1 },
    { month: 'Sep', partners: 8, volume: 4.2 },
    { month: 'Oct', partners: 12, volume: 7.8 },
    { month: 'Nov', partners: 15, volume: 12.4 },
    { month: 'Dec', partners: 18, volume: 18.9 },
    { month: 'Jan', partners: 22, volume: 28.5 },
  ];

  // Partnership data
  const confirmedPartners = [
    { name: 'Gains Network', status: 'Confirmed', network: 'Arbitrum', tier: 'Genesis', volume: '$2.4M' },
    { name: 'GMX', status: 'Confirmed', network: 'Arbitrum', tier: 'Genesis', volume: '$8.7M' },
    { name: 'Helix', status: 'Confirmed', network: 'Injective', tier: 'Genesis', volume: '$1.2M' },
    { name: 'Pear Protocol', status: 'Confirmed', network: 'Ethereum', tier: 'Genesis', volume: '$3.1M' },
    { name: 'Paradex', status: 'Confirmed', network: 'Starknet', tier: 'Genesis', volume: '$5.8M' },
    { name: 'SynFutures', status: 'Confirmed', network: 'Polygon', tier: 'Early', volume: '$4.2M' },
    { name: 'Vertex', status: 'Launching', network: 'Arbitrum', tier: 'Early', volume: 'TBD' }
  ];

  const pricingTiers = [
    { tier: 'Genesis (First 5)', discount: '75%', slots: '3/5', cost: '$2,500', integration: '$2,500', prizePool: '$0' },
    { tier: 'Early (Next 10)', discount: '50%', slots: '2/10', cost: '$5,000', integration: '$2,500', prizePool: 'Up to $2,500' },
    { tier: 'Standard (Final 5)', discount: '25%', slots: '5/5', cost: '$7,500', integration: '$2,500', prizePool: 'Up to $5,000' },
    { tier: 'Regular (After 20)', discount: '0%', slots: '∞', cost: 'Contact Us', integration: '$2,500', prizePool: 'Up to $7,500' }
  ];

  // Sidebar structure matching the inspiration
  const sidebarStructure = [
    {
      groupName: "Partnership Overview",
      items: [
        { id: 'overview', label: 'Partnership Hub', icon: '📊' },
        { id: 'mission', label: 'Mission & Vision', icon: '🎯' },
        { id: 'market', label: 'Market Opportunity', icon: '📈' },
        { id: 'benefits', label: 'Partner Benefits', icon: '💎' }
      ]
    },
    {
      groupName: "Partnership Details",
      items: [
        { id: 'requirements', label: 'Integration Requirements', icon: '⚙️' },
        { id: 'pricing', label: 'Pricing & Incentives', icon: '💰' },
        { id: 'partners', label: 'Partner Ecosystem', icon: '🤝' },
        { id: 'roadmap', label: 'Product Roadmap', icon: '🗺️' }
      ]
    },
    {
      groupName: "Resources & Knowledge",
      items: [
        { id: 'onboarding', label: 'Onboarding Process', icon: '🚀' },
        { id: 'support', label: 'Technical Support', icon: '🛠️' },
        { id: 'marketing', label: 'Co-Marketing', icon: '📢' },
        { id: 'contact', label: 'Contact & Apply', icon: '📞' }
      ]
    }
  ];

  // Header banner inspired by the design
  const DocumentationBanner = () => (
    <div className="bg-zinc-900/50 border-l-4 border-purple-500 rounded-lg p-6 mb-8 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">DexPal Partnership Hub & Knowledge Center</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This dashboard provides comprehensive information about DexPal's partnership program, integration requirements, and growth opportunities. Explore our ecosystem and discover how to join the future of decentralized trading.
          </p>
        </div>
      </div>
    </div>
  );

  // Overview content with market data
  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">DexPal Partnership Hub</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Join the revolution in decentralized trading. DexPal is building the comprehensive infrastructure that bridges traditional and decentralized finance through advanced analytics, gamified rewards, and seamless user experiences.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">$283B</div>
            <div className="text-sm text-zinc-400">2027 Volume Projection</div>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">100K+</div>
            <div className="text-sm text-zinc-400">Active Users Target</div>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">80</div>
            <div className="text-sm text-zinc-400">Integrated DEXs</div>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">7</div>
            <div className="text-sm text-zinc-400">Confirmed Partners</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">Mission Statement</h3>
          <p className="text-zinc-200 leading-relaxed">
            DexPal's mission is to help onboard and guide a new generation of traders to disrupt the multi-trillion dollar crypto derivatives market towards a more decentralized future.
          </p>
        </div>
      </div>

      {/* Market Opportunity Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue Projection</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181B', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8B5CF6" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-zinc-400 text-sm mt-2">Revenue in millions USD</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Partnership Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={partnershipGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181B', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="partners" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-zinc-400 text-sm mt-2">Number of partner DEXs</p>
        </div>
      </div>
    </div>
  );

  // Market Opportunity
  const renderMarket = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Market Opportunity</h2>
      
      <div className="mb-8">
        <p className="text-zinc-300 leading-relaxed mb-6">
          The crypto derivatives market presents a massive opportunity for disruption and growth. DexPal is positioned to capture significant market share through strategic partnerships and innovative technology.
        </p>
      </div>

      {/* Market Stats Table */}
      <div className="overflow-hidden rounded-xl border border-zinc-700/50 mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-800/60 border-b border-zinc-700/50">
              <th className="text-left py-4 px-6 text-white font-semibold">Time Period</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Revenue Projection</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Trading Volume</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Active Users</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Integrated DEXs</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900/40">
            {marketData.map((data, index) => (
              <tr key={index} className="border-b border-zinc-700/30 hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-6 text-zinc-200 font-medium">{data.year}</td>
                <td className="py-4 px-6 text-purple-400 font-semibold">${data.revenue} Million</td>
                <td className="py-4 px-6 text-zinc-300">${data.volume} Billion</td>
                <td className="py-4 px-6 text-zinc-300">{data.users.toLocaleString()}+</td>
                <td className="py-4 px-6 text-zinc-300">{data.dexs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Core Value Proposition */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Data Fragmentation</h3>
          <p className="text-zinc-400 text-sm">DEX traders must navigate multiple interfaces to access comprehensive market data</p>
        </div>

        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Limited Analytics</h3>
          <p className="text-zinc-400 text-sm">Current platforms offer insufficient visualization and analysis tools</p>
        </div>

        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Absent Reward Structures</h3>
          <p className="text-zinc-400 text-sm">Existing DEXs capture value from users without sufficient value return</p>
        </div>
      </div>
    </div>
  );

  // Enhanced Partner Benefits
  const renderBenefits = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Partner Benefits</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            icon: '🎯',
            title: 'Custom DEX Profile',
            description: 'Dedicated page showcasing metrics, trading pairs, incentives, and updates',
            color: 'purple'
          },
          {
            icon: '📈',
            title: 'Boosted User Activity',
            description: 'Rewards and points programs drive higher volumes and increase DAUs',
            color: 'blue'
          },
          {
            icon: '🌟',
            title: 'Greater Visibility',
            description: 'Featured content and marketing campaigns spotlight your DEX',
            color: 'emerald'
          },
          {
            icon: '🤖',
            title: 'AI-Powered Onboarding',
            description: 'Tools and tutorials help users start trading quickly',
            color: 'orange'
          },
          {
            icon: '📊',
            title: 'Pro-User Analytics',
            description: 'Rich insights and performance tracking for serious traders',
            color: 'cyan'
          },
          {
            icon: '🏆',
            title: 'Gamified Growth',
            description: 'Quests, competitions, and leaderboards promote retention',
            color: 'pink'
          },
          {
            icon: '💬',
            title: 'Actionable Feedback',
            description: 'Direct user insights to inform product improvements',
            color: 'indigo'
          },
          {
            icon: '🪙',
            title: 'Token Airdrop Eligibility',
            description: 'Early partners eligible for upcoming utility token airdrop',
            color: 'amber'
          }
        ].map((benefit, index) => (
          <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Enhanced Partners display
  const renderPartners = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Partner Ecosystem</h2>
      
      <div className="mb-8">
        <p className="text-zinc-300 leading-relaxed">
          Leading DEXs across multiple networks have joined the DexPal ecosystem, representing diverse trading opportunities and cutting-edge DeFi infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {confirmedPartners.map((partner, index) => (
          <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-white text-lg group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-zinc-400 text-sm">{partner.network}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                  partner.status === 'Confirmed' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                }`}>
                  {partner.status}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Tier:</span>
                <span className="text-purple-400 font-medium">{partner.tier}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Volume:</span>
                <span className="text-zinc-200 font-medium">{partner.volume}</span>
              </div>
            </div>
            
            <div className="mt-4 w-full bg-zinc-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000" 
                style={{ width: partner.status === 'Confirmed' ? '100%' : '75%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Enhanced Pricing
  const renderPricing = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Pricing & Incentives</h2>
      
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Early Partner Advantage</h3>
          <div className="text-3xl font-bold text-white mb-2">Up to 75% OFF</div>
          <p className="text-zinc-400">Genesis partners get maximum savings and exclusive benefits</p>
        </div>
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-emerald-400 mb-4">Standard Integration</h3>
          <div className="text-3xl font-bold text-white mb-2">Contact Us</div>
          <p className="text-zinc-400">Custom pricing for standard partnerships</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-700/50">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-800/60 border-b border-zinc-700/50">
              <th className="text-left py-4 px-6 text-white font-semibold">Partnership Tier</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Discount</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Available Slots</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Total Cost</th>
              <th className="text-left py-4 px-6 text-white font-semibold">Prize Pool</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900/40">
            {pricingTiers.map((tier, index) => (
              <tr key={index} className="border-b border-zinc-700/30 hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-6 text-zinc-200 font-medium">{tier.tier}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    tier.discount === '75%' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                    tier.discount === '50%' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    tier.discount === '25%' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                    'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}>
                    {tier.discount}
                  </span>
                </td>
                <td className="py-4 px-6 text-zinc-300">{tier.slots}</td>
                <td className="py-4 px-6 font-semibold text-purple-400 text-lg">{tier.cost}</td>
                <td className="py-4 px-6 text-zinc-400">{tier.prizePool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Simple content renderers for other sections
  const renderRequirements = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Integration Requirements</h2>
      <p className="text-zinc-300 mb-6">Technical requirements and integration specifications for partner DEXs.</p>
      <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-purple-400 mb-4">Core Requirements</h3>
        <ul className="space-y-3 text-zinc-300">
          <li>• Affiliate code system with 20%+ fee share</li>
          <li>• REST API access for trading data</li>
          <li>• Co-marketing agreement</li>
          <li>• DEX onboarding information form</li>
        </ul>
      </div>
    </div>
  );

  const renderMission = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Mission & Vision</h2>
      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-3">Our Mission</h3>
        <p className="text-zinc-200 leading-relaxed">
          To accelerate DeFi adoption by helping traders transition from centralized to decentralized platforms through rewards, advanced analytics, and seamless user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="text-4xl mb-4">🌉</div>
          <h4 className="font-semibold text-white mb-2">Bridge the Gap</h4>
          <p className="text-zinc-400 text-sm">Connect CEX users to DeFi opportunities</p>
        </div>
        <div className="text-center bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="text-4xl mb-4">⚡</div>
          <h4 className="font-semibold text-white mb-2">Simplify DeFi</h4>
          <p className="text-zinc-400 text-sm">Remove complexity barriers</p>
        </div>
        <div className="text-center bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <div className="text-4xl mb-4">🎁</div>
          <h4 className="font-semibold text-white mb-2">Reward Participation</h4>
          <p className="text-zinc-400 text-sm">Create sustainable incentive systems</p>
        </div>
      </div>
    </div>
  );

  const renderRoadmap = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Product Roadmap</h2>
      <div className="space-y-6">
        {[
          { phase: 'Genesis Launch', time: 'Aug - Fall 2025', desc: 'Beta release with 10-15 partner DEXs' },
          { phase: 'Official Launch', time: 'Late Fall 2025', desc: 'Public release with full analytics and features' },
          { phase: 'Expansion', time: '2026+', desc: 'Advanced features and global partnerships' }
        ].map((item, index) => (
          <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{item.phase}</h3>
              <span className="text-purple-400 font-medium text-sm bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                {item.time}
              </span>
            </div>
            <p className="text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOnboarding = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Onboarding Process</h2>
      <p className="text-zinc-300 mb-6">Streamlined 2-4 week integration process with dedicated support.</p>
      <div className="space-y-4">
        {[
          { step: '1', title: 'Initial Discussion', desc: 'Partnership call and requirement review' },
          { step: '2', title: 'Technical Setup', desc: 'API integration and affiliate code setup' },
          { step: '3', title: 'Testing Phase', desc: 'Integration testing and quality assurance' },
          { step: '4', title: 'Go Live', desc: 'Launch partnership and marketing campaign' }
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-4 bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/25">
              {item.step}
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Technical Support</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Integration Support</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>• Dedicated technical team</li>
            <li>• Real-time communication channels</li>
            <li>• Comprehensive documentation</li>
            <li>• Weekly progress check-ins</li>
          </ul>
        </div>
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Ongoing Support</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>• 24/7 monitoring and alerts</li>
            <li>• Monthly performance reports</li>
            <li>• Priority bug fixes</li>
            <li>• Quarterly business reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderMarketing = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Co-Marketing Strategy</h2>
      <p className="text-zinc-300 mb-6">Comprehensive marketing approach to amplify both brands through coordinated campaigns.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Launch Campaign</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>• Joint press releases</li>
            <li>• Social media coordination</li>
            <li>• Community cross-promotion</li>
            <li>• Influencer outreach</li>
          </ul>
        </div>
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Ongoing Collaboration</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>• Monthly trading competitions</li>
            <li>• Educational content creation</li>
            <li>• Performance analytics</li>
            <li>• Community events</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Contact & Apply</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Partnership Team</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-400">💼</span>
              </div>
              <div>
                <div className="font-medium text-white">Business Development</div>
                <div className="text-purple-400 text-sm font-mono">partnerships@dexpal.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">⚙️</span>
              </div>
              <div>
                <div className="font-medium text-white">Technical Integration</div>
                <div className="text-purple-400 text-sm font-mono">tech@dexpal.com</div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-3">Next Steps</h4>
            <ol className="space-y-2 text-zinc-300 text-sm">
              <li>1. Email partnerships@dexpal.com</li>
              <li>2. Schedule intro call</li>
              <li>3. Review technical requirements</li>
              <li>4. Sign partnership agreement</li>
              <li>5. Begin integration</li>
            </ol>
          </div>
        </div>

        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Quick Application</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">DEX Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                placeholder="Your DEX name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Network</label>
              <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors">
                <option>Select network</option>
                <option>Arbitrum</option>
                <option>Ethereum</option>
                <option>Polygon</option>
                <option>Base</option>
                <option>Optimism</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Contact Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                placeholder="contact@yourdex.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Monthly Volume</label>
              <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors">
                <option>Select range</option>
                <option>$1M - $10M</option>
                <option>$10M - $100M</option>
                <option>$100M - $1B</option>
                <option>$1B+</option>
              </select>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Main content renderer
  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'mission': return renderMission();
      case 'market': return renderMarket();
      case 'benefits': return renderBenefits();
      case 'requirements': return renderRequirements();
      case 'pricing': return renderPricing();
      case 'partners': return renderPartners();
      case 'roadmap': return renderRoadmap();
      case 'onboarding': return renderOnboarding();
      case 'support': return renderSupport();
      case 'marketing': return renderMarketing();
      case 'contact': return renderContact();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header inspired by the design */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="ml-3 text-xl font-bold text-white">DexPal Dashboard</span>
              </div>
              
              {/* Navigation inspired by the image */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Overview</a>
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Features</a>
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Business Model</a>
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Partners</a>
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Tokenomics</a>
              </nav>
            </div>
            
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 border border-white/20">
              Apply Now
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DocumentationBanner />
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar inspired by the navigation structure */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-6">Dashboard Navigation</h3>
              
              {sidebarStructure.map((group, groupIndex) => (
                <div key={groupIndex} className="mb-6 last:mb-0">
                  <button
                    onClick={() => toggleGroup(group.groupName)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left font-medium text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group"
                  >
                    <span className="text-sm">{group.groupName}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 text-zinc-400 group-hover:text-purple-400 ${
                        expandedGroups.includes(group.groupName) ? 'rotate-90' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {expandedGroups.includes(group.groupName) && (
                    <div className="ml-2 mt-2 space-y-1">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                            activeTab === item.id
                              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                              : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                          }`}
                        >
                          <span className="mr-3 text-base">{item.icon}</span>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900/60 backdrop-blur-sm border-t border-zinc-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="ml-2 text-lg font-bold text-white">DexPal</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The comprehensive platform for DEX trading analytics, rewards, and partnerships.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">API</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Partners</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Become a Partner</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Partner Portal</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Integration Guide</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800/50 mt-8 pt-8 text-center">
            <p className="text-zinc-500 text-sm">© 2025 DexPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DexPalPartnershipDashboard;