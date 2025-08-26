import { useState } from "react";

const DexPalPartnershipDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const sideBarNavLinks = [
    {
      id: "overview",
      label: "Overview",
      icon: "🎯",
    },
    {
      id: "benefits",
      label: "Partner Benefits",
      icon: "🤝",
    },
    {
      id: "rewards",
      label: "Universal Rewards Program",
      icon: "💰",
    },
    {
      id: "requirements",
      label: "Integration Requirements",
      icon: "⚙️",
    },
    {
      id: "api",
      label: "API Requirements",
      icon: "🔌",
    },
    {
      id: "roadmap",
      label: "Product Roadmap",
      icon: "🗺️",
    },
    {
      id: "contact",
      label: "Contact & Apply",
      icon: "📧",
    },
  ];

  // Header banner inspired by the design
  const DocumentationBanner = () => (
    <div className="bg-zinc-900/50 border-l-4 border-purple-500 rounded-lg p-6 max-md:p-4 mb-8 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Welcome!</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This Dataroom is designed for DEX partners integrating with DexPal.
            Here, you'll find everything you need to know about DexPal, along
            with the steps required to integrate your DEX into our data terminal
            and universal rewards program.
          </p>
        </div>
      </div>
    </div>
  );

  // Overview content with market data
  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
        {/* What is DexPal Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 max-md:p-4 mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            What is DexPal?
          </h3>
          <p className="text-zinc-200 leading-relaxed mb-2">
            DexPal is the all-in-one data dashboard and rewards hub for trading
            perpetual futures on decentralized exchanges (DEXs).
          </p>
          <p className="text-zinc-200 leading-relaxed">
            We streamline onboarding and enhance the user experience, making
            DeFi derivatives more accessible to retail traders and CEX
            users—while empowering DEXs to grow and retain their communities
            through our universal rewards program.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Benefits</h1>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Growth</h3>
            <p className="text-zinc-400 text-sm">
              Attract new traders and increase both trading volume and frequency
              on your DEX.
            </p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Additional Rewards
            </h3>
            <p className="text-zinc-400 text-sm">
              Your users earn extra incentives for trading on your platform
              through our rewards program.
            </p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👀</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Greater Visibility
            </h3>
            <p className="text-zinc-400 text-sm">
              Promote your DEX with a customizable, shareable profile that keeps
              the public updated on your features and offerings.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 max-md:p-4">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            Mission Statement
          </h3>
          <p className="text-zinc-200 leading-relaxed">
            DexPal's mission is to address the fragmentation and user experience
            challenges facing traders and DEXs. By simplifying the process, we
            aim to onboard the next generation of traders towards a more
            decentralized future.
          </p>
        </div>
      </div>
    </div>
  );

  // Enhanced Partner Benefits
  const renderBenefits = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Partner Benefits</h2>

      <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            icon: "🌟",
            title: "Custom DEX Profile",
            description:
              "Dedicated page showcasing metrics, trading pairs, incentives, and updates",
          },
          {
            icon: "💰",
            title: "DexPal Rewards Program",
            description:
              "Users earn DexPal points, xp and achievements for their trading activity on your DEX",
          },
          {
            icon: "🏆",
            title: "Leaderboards & Competitions",
            description:
              "Traders can participate in volume-based incentives and exclusive trading competitions",
          },
          {
            icon: "👀",
            title: "Greater Visibility",
            description:
              "Gain exposure through featured content and marketing campaigns spotlighting your DEX",
          },
          {
            icon: "🎮",
            title: "Gamified Growth",
            description:
              "Boost user retention with quests, daily check-ins, and achievement systems",
          },
          {
            icon: "🪙",
            title: "DexPal Token Airdrop",
            description:
              "Early users and partners are eligible for the upcoming token airdrop",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white/80 mb-6">Coming Soon</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            icon: "👛",
            title: "DexPal Treasury",
            description:
              "A portion of prize pool contributions will be used to buy and stake your DEX's tokens or provide liquidity directly on your DEX",
          },
          {
            icon: "💬",
            title: "Actionable Feedback",
            description:
              "Receive direct user insights to inform and accelerate product improvements",
          },
          {
            icon: "🤖",
            title: "AI-Powered Onboarding",
            description:
              "Guided tools and tutorials that help users start trading quickly and confidently",
          },
          {
            icon: "📈",
            title: "Pro-User Analytics",
            description:
              "Advanced insights and performance tracking tailored for your users",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // New Universal Rewards Program page
  const renderUniversalRewards = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
        {/* Program Introduction */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 max-md:p-4 mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            Universal Rewards Program
          </h3>
          <p className="text-zinc-200 leading-relaxed mb-4">
            DexPal is launching the first{" "}
            <span className="text-white font-semibold">
              universal rewards program
            </span>{" "}
            for on-chain perpetuals trading. The program is designed to{" "}
            <span className="text-white font-semibold">
              increase trading volume and user engagement
            </span>{" "}
            for our partner DEXs while providing traders with meaningful
            incentives.
          </p>
          <p className="text-zinc-200 leading-relaxed mb-4">
            Users earn{" "}
            <span className="text-white font-semibold">DexPal Rewards</span>{" "}
            based on their trading volume and the fees they generate and{" "}
            <span className="text-white font-semibold">
              100% of the revenues collected
            </span>{" "}
            through our affiliate codes are redirected into a prize pool, which
            is redistributed at the end of each epoch to eligible participants.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8">DexPal Rewards</h1>

        {/* DexPal Rewards Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
              DexPal Points
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Main reward currency earned from trading volume and contribution
              to the prize pool. Points determine airdrop allocation and have
              utility within our rewards systems.
            </p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4 hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              XP
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Earned by completing specific tasks and quests. XP applies a{" "}
              <span className="text-white font-medium">multiplier effect</span>{" "}
              to points earned within each epoch.
            </p>
          </div>
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-6 max-md:p-4 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
              Collectibles (NFTs)
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Holding certain collectibles grants members{" "}
              <span className="text-white font-medium">permanent benefits</span>{" "}
              such as exclusive access or boosters.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8">
          Prize Pool Rewards
        </h1>

        {/* Prize Pool Funding */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 max-md:p-4 mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Prize Pool Funding
          </h3>
          <p className="text-zinc-200 leading-relaxed mb-4">
            Funded entirely from:
          </p>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              100% Affiliate revenue from DexPal referral codes
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Sponsorship deals with DEXs and other partners
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Ecosystem grants
            </li>
          </ul>
        </div>

        {/* Distribution Breakdown */}
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-8 max-md:p-4">
          <h3 className="text-xl font-semibold text-purple-400 mb-6">
            Intended Distribution at End of Each Epoch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800/60 rounded-lg border border-zinc-700/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                  <span className="text-white font-medium">
                    Cashback & Referrals
                  </span>
                </div>
                <span className="text-emerald-400 font-bold text-xl">40%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-800/60 rounded-lg border border-zinc-700/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-white font-medium">
                    Points Leaderboards
                  </span>
                </div>
                <span className="text-purple-400 font-bold text-xl">25%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800/60 rounded-lg border border-zinc-700/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-white font-medium">
                    DEX Competitions
                  </span>
                </div>
                <span className="text-blue-400 font-bold text-xl">25%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-800/60 rounded-lg border border-zinc-700/30">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-white font-medium">
                    Treasury & Operations
                  </span>
                </div>
                <span className="text-orange-400 font-bold text-xl">10%</span>
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="mt-8 pt-6 border-t border-zinc-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Cashback & Referrals (40%)
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Fee rebates to users and referral bonuses for recommending
                  friends to the platform.
                </p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">
                  Points Leaderboards Competition (25%)
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Platform-wide leaderboard competitions based on who has the
                  most points across all DEXs.
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">
                  DEX Exclusive Points Competitions (25%)
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  DEX-specific leaderboard competitions for traders with the
                  most points on individual platforms.
                </p>
              </div>
              <div>
                <h4 className="text-orange-400 font-semibold mb-2">
                  Treasury & Operational Costs (10%)
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Platform maintenance, development, and strategic treasury
                  reserves for long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntegrationRequirements = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
        {/* Page Introduction */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-6 max-md:p-4 mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            Integration Requirements
          </h3>
          <p className="text-zinc-200 leading-relaxed">
            Technical requirements and integration specifications for partner
            DEXs.
          </p>
        </div>

        {/* Core Requirements - TODO: Add links to Git Repo + Google Form (?) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Core Requirements
          </h2>
          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-8 max-md:p-4">
            <ul className="space-y-4 text-zinc-300 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>Integration fee</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>
                  Affiliate code (DEXPAL) with{" "}
                  <span className="text-white font-semibold">
                    20%+ fee share
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>REST API access for trading data</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>Co-marketing efforts</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>DEX onboarding information form</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>
                  Updating your most recent info into your profile via your
                  admin dashboard
                </span>
              </li>
            </ul>
            <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
              <p className="text-purple-200 text-sm leading-relaxed">
                All affiliate revenue is redirected to the prize pool, the
                higher the affiliate %, the more DexPal points traders earn by
                trading on your DEX.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & Incentives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Pricing & Incentives
          </h2>

          <div className="space-y-6">
            {/* Genesis Program */}
            <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Genesis Program
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                DEXs who are part of the genesis program will pay between{" "}
                <span className="text-white font-semibold">
                  $2,500 - $5,000
                </span>{" "}
                one time fee depending on the complexity of integration with
                their APIs. After the genesis program we intend to increase the
                Integration fees to a minimum of{" "}
                <span className="text-white font-semibold">$10k</span>.
              </p>
              <p className="text-zinc-400 text-sm">
                DexPal will limit the number of DEXs that participate in the
                Genesis program to a maximum of{" "}
                <span className="text-purple-400 font-semibold">15</span>.
              </p>
            </div>

            {/* Bootstrapping Competition */}
            <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Bootstrapping your DEXs trading competition (Optional)
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                We encourage partner DEXs to sponsor a volume based competition
                in the range of{" "}
                <span className="text-white font-semibold">$2,000–$10,000</span>{" "}
                to DexPal users who trade on your DEX. These funds will be
                exclusively used to reward DexPal users and{" "}
                <span className="text-purple-400 font-semibold">
                  25% of all fees generated
                </span>{" "}
                by the usage of the affiliate codes from your DEX will be
                contributed to this competition.
              </p>
            </div>
          </div>
        </div>

        {/* Co-Marketing Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Co-Marketing Strategy
          </h2>
          <p className="text-zinc-300 mb-6">
            Comprehensive marketing approach to amplify both brands through
            coordinated campaigns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Launch Campaign
              </h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Joint announcements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Social media coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Community cross-promotion
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Influencer outreach
                </li>
              </ul>
            </div>
            <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Ongoing Collaboration
              </h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Monthly trading competitions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Educational content creation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Performance analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Community events
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Onboarding Process */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Onboarding Process
          </h2>
          <p className="text-zinc-300 mb-6">
            Streamlined 2-4 week integration process with dedicated support.
          </p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Initial Discussion",
                desc: "Partnership call and requirement review",
              },
              {
                step: "2",
                title: "Technical Setup",
                desc: "API integration and affiliate code setup",
              },
              {
                step: "3",
                title: "Testing Phase",
                desc: "Integration testing and quality assurance",
              },
              {
                step: "4",
                title: "Go Live",
                desc: "Launch partnership and marketing campaign",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/25">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAPIRequirements = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
        {/* Page Introduction */}
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            DexPal API Integration Requirements
          </h3>
          <p className="text-zinc-200 leading-relaxed">
            This document outlines the API endpoints and integration
            requirements for DexPal.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 mb-6">
            <p className="text-zinc-300 leading-relaxed mb-4">
              The DexPal API uses REST endpoints with JSON responses and
              requires Bearer token authentication. All endpoints are hosted on{" "}
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                **.dexpal.ai
              </code>{" "}
              and return structured data for integration with external systems.
            </p>
            <div className="flex items-center space-x-3 bg-zinc-800/60 border border-zinc-600/50 rounded-lg p-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">GitHub Repository</h4>
                <a
                  href="https://github.com/dexpal-analytics/api-integration-requirements/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
                >
                  github.com/dexpal-analytics/api-integration-requirements
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Volume Reports</h2>
          <p className="text-zinc-300 mb-6">
            Information regarding trading volume reports for wallet addresses.
          </p>

          <div className="space-y-6">
            {/* Request */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Request
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  {`GET /volume-reports HTTP/1.1
Host: **.dexpal.ai
Authorization: Bearer <access_token>`}
                </pre>
              </div>
            </div>

            {/* Response */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-blue-400 text-sm font-mono">
                  {`HTTP/1.1 200 OK
Content-Type: application/json

{
  "reports": [
    {
      "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f6E123",
      "date": "2025-07-30",
      "volume_usd": 150000.5,
      "fees_usd": 375.25,
      "transaction_count": 45,
      "metadata": {
        "pairs_traded": ["ETH/USDT", "BTC/USDT"],
        "exchange_user_id": "user123"
      }
    }
  ]
}`}
                </pre>
              </div>
            </div>

            {/* Response Type */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response Type
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-orange-400 text-sm font-mono">
                  {`interface VolumeReport {
  wallet_address: string;
  date: string;
  volume_usd: number;
  fees_usd: number;
  transaction_count?: number;
  metadata?: Record<string, unknown>;
}

interface VolumeReportsResponse {
  reports: VolumeReport[];
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Referral Status
          </h2>
          <p className="text-zinc-300 mb-6">
            Information regarding the referral status of a user.
          </p>

          <div className="space-y-6">
            {/* Request */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Request
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  {`GET /referral-status HTTP/1.1
Host: **.dexpal.ai
Authorization: Bearer <access_token>`}
                </pre>
              </div>
            </div>

            {/* Parameters */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Parameters
              </h3>
              <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4">
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                      user_address
                    </code>
                    <span className="text-red-400 ml-2">(required)</span>
                    <span className="ml-2">The user's wallet address.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Response */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-blue-400 text-sm font-mono">
                  {`HTTP/1.1 200 OK
Content-Type: application/json

{
  "is_active": true
}`}
                </pre>
              </div>
            </div>

            {/* Response Type */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response Type
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-orange-400 text-sm font-mono">
                  {`interface ReferralStatusResponse {
  is_active: boolean;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* DEX Points Balance */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            DEX Points Balance (Optional)
          </h2>
          <p className="text-zinc-300 mb-6">
            Information regarding points balances for DEXs that have their own
            points system.
          </p>

          <div className="space-y-6">
            {/* Request */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Request
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  {`GET /dex-points-balance HTTP/1.1
Host: **.dexpal.ai
Authorization: Bearer <access_token>`}
                </pre>
              </div>
            </div>

            {/* Parameters */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Parameters
              </h3>
              <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4">
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                      user_address
                    </code>
                    <span className="text-red-400 ml-2">(required)</span>
                    <span className="ml-2">The user's wallet address.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Response */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-blue-400 text-sm font-mono">
                  {`HTTP/1.1 200 OK
Content-Type: application/json

{
  "points": 100
}`}
                </pre>
              </div>
            </div>

            {/* Response Type */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Response Type
              </h3>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-orange-400 text-sm font-mono">
                  {`interface DEXPointsBalanceResponse {
  points: number;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductRoadmap = () => (
    <div className="space-y-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
        {/* Page Introduction */}
        <h2 className="text-2xl font-bold text-white mb-6">Product Roadmap</h2>

        <div className="space-y-8">
          {[
            {
              phase: "Genesis Launch",
              time: "Q3 2025",
              desc: "Beta release of our first version of the app focused on our rewards program with 10-15 partner DEXs.",
              color: "emerald",
              bgColor: "from-emerald-500 to-emerald-600",
              borderColor: "border-emerald-500/30",
              shadowColor: "shadow-emerald-500/25",
            },
            {
              phase: "Official Launch",
              time: "Q4 2025",
              desc: "Wider Public release with additional analytics & rewards program features.",
              color: "purple",
              bgColor: "from-purple-500 to-purple-600",
              borderColor: "border-purple-500/30",
              shadowColor: "shadow-purple-500/25",
            },
            {
              phase: "Expansion",
              time: "Q2 2026",
              desc: "Additional onboarding features and incentives campaigns to attract CEX & Forex Traders to DEXs.",
              color: "blue",
              bgColor: "from-blue-500 to-blue-600",
              borderColor: "border-blue-500/30",
              shadowColor: "shadow-blue-500/25",
            },
            {
              phase: "TGE",
              time: "Q3 2026",
              desc: "TGE and airdrop to community and partners, implementation of brand new rewards program features incorporating our token.",
              color: "orange",
              bgColor: "from-orange-500 to-orange-600",
              borderColor: "border-orange-500/30",
              shadowColor: "shadow-orange-500/25",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-8 max-md:p-4 hover:border-zinc-600/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">
                  {item.phase}
                </h3>
                <span
                  className={`text-${item.color}-400 font-bold text-lg bg-${item.color}-500/20 px-4 py-2 rounded-full border ${item.borderColor} w-fit`}
                >
                  {item.time}
                </span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-12 bg-gradient-to-r from-zinc-800/40 to-zinc-700/40 border border-zinc-600/30 rounded-xl p-6 max-md:p-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-400 text-lg">🚀</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Join the Journey
              </h4>
              <p className="text-zinc-300 leading-relaxed">
                Be part of the revolution in DeFi trading. Partner DEXs who join
                during our Genesis phase will have exclusive benefits and early
                access to all upcoming features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // TODO: Actually wire up form to send email to info@dexpal.io / hamed@dexpal.io
  const renderContact = () => (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-md:p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Contact & Apply</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            Partnership Team
          </h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-400">💼</span>
              </div>
              <div>
                <div className="font-medium text-white">
                  Business Development
                </div>
                <div className="text-purple-400 text-sm font-mono">
                  hamed@dexpal.ai
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">⚙️</span>
              </div>
              <div>
                <div className="font-medium text-white">
                  Technical Integration
                </div>
                <div className="text-purple-400 text-sm font-mono">
                  hamed@dexpal.ai
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
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

        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6 max-md:p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            Quick Application
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                DEX Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Your DEX name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Network
              </label>
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
              <label className="block text-sm font-medium text-white mb-2">
                Contact Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="contact@yourdex.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Monthly Volume
              </label>
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
      case "overview":
        return renderOverview();
      case "benefits":
        return renderBenefits();
      case "rewards":
        return renderUniversalRewards();
      case "requirements":
        return renderIntegrationRequirements();
      case "api":
        return renderAPIRequirements();
      case "roadmap":
        return renderProductRoadmap();
      case "contact":
        return renderContact();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header inspired by the design */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img
              src="/dexpal-full-white-logo.png"
              alt="DexPal Logo"
              className="h-11 w-auto mb-1"
            />
            <button
              onClick={() => setActiveTab("contact")}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 border border-white/20"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-8">
        <DocumentationBanner />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar inspired by the navigation structure */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 max-md:p-4 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-2">Menu</h3>
              {sideBarNavLinks.map((link, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <button
                    onClick={() => setActiveTab(link.id)}
                    className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      activeTab === link.id
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    <span className="mr-3 text-base">{link.icon}</span>
                    {link.label}
                  </button>
                </div>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">{renderContent()}</main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900/60 backdrop-blur-sm border-t border-zinc-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-12">
          <p className="text-zinc-500 text-sm text-center">
            © 2025 DexPal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DexPalPartnershipDashboard;
