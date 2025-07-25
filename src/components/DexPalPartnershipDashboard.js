import React, { useState } from 'react';

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



  // Partnership data
  const confirmedPartners = [
    { name: 'Gains Network', status: 'Confirmed', network: 'Arbitrum', tier: 'Genesis' },
    { name: 'GMX', status: 'Confirmed', network: 'Arbitrum', tier: 'Genesis' },
    { name: 'Helix', status: 'Confirmed', network: 'Injective', tier: 'Genesis' },
    { name: 'Pear Protocol', status: 'Confirmed', network: 'Ethereum', tier: 'Genesis' },
    { name: 'Paradex', status: 'Confirmed', network: 'Starknet', tier: 'Genesis' },
    { name: 'SynFutures', status: 'Confirmed', network: 'Polygon', tier: 'Early' },
    { name: 'Vertex', status: 'Waitlisted', network: 'Arbitrum', tier: 'Early' }
  ];

  // Sidebar structure matching the inspiration
  const sidebarStructure = [
    {
      groupName: "Partnership Overview",
      items: [
        { id: 'overview', label: 'Partnership Hub', icon: '📊' },
        { id: 'mission', label: 'DexPal Overview', icon: '🎯' },
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
          <h2 className="text-lg font-semibold text-white mb-2">DEX Onboarding Hub & Knowledge Center</h2>
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
          <h1 className="text-3xl font-bold text-white mb-4">DEX Onboarding Hub</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Join the revolution in decentralized trading. DexPal is building the comprehensive infrastructure that bridges traditional and decentralized finance through advanced analytics, gamified rewards, and seamless user experiences.
          </p>
        </div>

        {/* What is DexPal Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">What is DexPal?</h3>
          <p className="text-zinc-200 leading-relaxed">
            DexPal is the all-in-one data dashboard and rewards hub for trading perpetual futures on DEXs. We simplify onboarding and UX to make DeFi derivatives accessible to retail and CEX users—while helping DEXs grow and retain users thanks to our unique rewards program.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Attract New Users</h3>
            <p className="text-zinc-400 text-sm">Bring new traders to your DEX from CEXs, Forex, and traditional markets</p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Additional Rewards</h3>
            <p className="text-zinc-400 text-sm">Traders earn extra rewards for using your DEX through our program</p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Greater Visibility</h3>
            <p className="text-zinc-400 text-sm">Custom profile of your DEX and updates to our user base</p>
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


    </div>
  );

  // Market Opportunity
  const renderMarket = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Market Opportunity</h2>
      
      <div className="mb-8">
        <p className="text-zinc-300 leading-relaxed mb-6">
          The number of users in traditional finance markets (CEXs, Forex, Stock traders) represents a massive opportunity for DEX growth. DexPal helps DEXs attract these new users by simplifying onboarding and providing familiar trading experiences with DeFi benefits.
        </p>
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
          <h3 className="text-lg font-semibold text-white mb-3">Fragmented Rewards</h3>
          <p className="text-zinc-400 text-sm">Referral and rewards systems are fragmented across DEXs, creating user friction and onboarding challenges</p>
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
      
      <div className="mb-8">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Genesis Program</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            DEXs who are part of the genesis program will pay between $2,500 - $5,000 one time fee depending on the complexity of integration with their APIs. After the genesis program we intend to increase the Integration fees to a minimum of $10k.
          </p>
          <p className="text-zinc-400 text-sm">
            DexPal will limit the number of DEXs that participate in the Genesis program to a maximum of 15.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-emerald-400 mb-4">DEX Giveaway (Optional)</h3>
          <p className="text-zinc-300 leading-relaxed">
            We encourage partner DEXs to sponsor a user giveaway in the range of $2,000–$10,000 to DexPal users who trade on your DEX. These funds will be exclusively used to reward DexPal users who trade on your DEX. The details of the giveaway and rules will be determined in the future.
          </p>
        </div>
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
          <li>• Integration fee cost</li>
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
      <h2 className="text-2xl font-bold text-white mb-6">DexPal Overview</h2>
      <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ubLtLPuepDM"
            title="DexPal Overview Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-zinc-400 text-sm mt-4 text-center">
          Watch our overview video to learn how DexPal is revolutionizing DEX trading
        </p>
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
                <div className="text-purple-400 text-sm font-mono">hamed@dexpal.ai</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">⚙️</span>
              </div>
              <div>
                <div className="font-medium text-white">Technical Integration</div>
                <div className="text-purple-400 text-sm font-mono">hamed@dexpal.ai</div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-3">Next Steps</h4>
            <ol className="space-y-2 text-zinc-300 text-sm">
              <li>1. Email hamed@dexpal.ai</li>
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
                <button onClick={() => setActiveTab('overview')} className="text-white/90 hover:text-white font-medium transition-colors">Overview</button>
                <button onClick={() => setActiveTab('benefits')} className="text-white/90 hover:text-white font-medium transition-colors">Benefits</button>
                <button onClick={() => setActiveTab('pricing')} className="text-white/90 hover:text-white font-medium transition-colors">Pricing</button>
                <button onClick={() => setActiveTab('partners')} className="text-white/90 hover:text-white font-medium transition-colors">Partners</button>
                <button onClick={() => setActiveTab('contact')} className="text-white/90 hover:text-white font-medium transition-colors">Contact</button>
              </nav>
            </div>
            
            <button 
              onClick={() => setActiveTab('contact')}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 border border-white/20"
            >
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
                <li><button onClick={() => setActiveTab('benefits')} className="text-zinc-400 hover:text-purple-400 transition-colors">Benefits</button></li>
                <li><button onClick={() => setActiveTab('pricing')} className="text-zinc-400 hover:text-purple-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => setActiveTab('requirements')} className="text-zinc-400 hover:text-purple-400 transition-colors">API</button></li>
                <li><button onClick={() => setActiveTab('support')} className="text-zinc-400 hover:text-purple-400 transition-colors">Documentation</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Partners</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveTab('contact')} className="text-zinc-400 hover:text-purple-400 transition-colors">Become a Partner</button></li>
                <li><button onClick={() => setActiveTab('partners')} className="text-zinc-400 hover:text-purple-400 transition-colors">Partner Portal</button></li>
                <li><button onClick={() => setActiveTab('requirements')} className="text-zinc-400 hover:text-purple-400 transition-colors">Integration Guide</button></li>
                <li><button onClick={() => setActiveTab('support')} className="text-zinc-400 hover:text-purple-400 transition-colors">Support</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveTab('mission')} className="text-zinc-400 hover:text-purple-400 transition-colors">About</button></li>
                <li><button onClick={() => setActiveTab('market')} className="text-zinc-400 hover:text-purple-400 transition-colors">Market</button></li>
                <li><button onClick={() => setActiveTab('roadmap')} className="text-zinc-400 hover:text-purple-400 transition-colors">Roadmap</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="text-zinc-400 hover:text-purple-400 transition-colors">Contact</button></li>
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