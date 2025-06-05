import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, Cell, LineChart, Line, PieChart, Pie } from 'recharts';
import { Building2, TrendingUp, Star, DollarSign, Target, Zap, Shield, Globe, Smartphone, BarChart3, ExternalLink, Users, AlertCircle, Trophy, Lightbulb, TrendingDown, Clock, Award, Brain, UserCheck, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { platformData, pricingData, satisfactionData, featureMatrix, employeeImpact, retentionImpact, criticalInsights } from '@/lib/reportData';
import { useReportStore } from '@/store/reportStore';
import PlatformList from '@/components/PlatformList';
import FeatureMatrix from '@/components/FeatureMatrix';
import PricingChart from '@/components/PricingChart';
import SatisfactionChart from '@/components/SatisfactionChart';
import MarketInsights from '@/components/MarketInsights';

const CompetitiveReport = () => {
  const selectedCategory = useReportStore((state) => state.selectedCategory);
  const setSelectedCategory = useReportStore((state) => state.setSelectedCategory);
  const selectedMarket = useReportStore((state) => state.selectedMarket);
  const setSelectedMarket = useReportStore((state) => state.setSelectedMarket);

  // Market Research Data
  const marketInsightsData = [
    {
      category: 'Market Growth',
      value: '15.2%',
      trend: 'up',
      description: 'Annual growth rate in corporate training market',
      source: 'Training Industry Report 2024',
      color: '#10B981'
    },
    {
      category: 'Digital Adoption',
      value: '89%',
      trend: 'up',
      description: 'Organizations using digital learning platforms',
      source: 'Deloitte Learning Report 2024',
      color: '#3B82F6'
    },
    {
      category: 'Leadership Focus',
      value: '67%',
      trend: 'up',
      description: 'Companies prioritizing leadership development',
      source: 'Brandon Hall Group 2024',
      color: '#8B5CF6'
    },
    {
      category: 'ROI Tracking',
      value: '42%',
      trend: 'up',
      description: 'Organizations measuring training ROI effectively',
      source: 'ATD State of the Industry 2024',
      color: '#F59E0B'
    }
  ];

  const trainingSpendData = [
    { year: '2020', spending: 366, leaders: 12.4 },
    { year: '2021', spending: 329, leaders: 11.8 },
    { year: '2022', spending: 392, leaders: 13.6 },
    { year: '2023', spending: 438, leaders: 15.2 },
    { year: '2024', spending: 505, leaders: 17.8 }
  ];

  const learningPreferencesData = [
    { name: 'Instructor-Led Online', value: 34, color: '#10B981' },
    { name: 'Self-Paced Digital', value: 28, color: '#3B82F6' },
    { name: 'Blended Learning', value: 22, color: '#8B5CF6' },
    { name: 'In-Person Training', value: 11, color: '#F59E0B' },
    { name: 'Mobile Learning', value: 5, color: '#EF4444' }
  ];

  const roiMetricsData = [
    { metric: 'Employee Retention', improvement: '+23%', companies: '78%', source: 'Harvard Business Review 2024' },
    { metric: 'Productivity Increase', improvement: '+18%', companies: '65%', source: 'McKinsey Leadership Study 2024' },
    { metric: 'Employee Engagement', improvement: '+31%', companies: '82%', source: 'Gallup State of Workplace 2024' },
    { metric: 'Internal Promotions', improvement: '+45%', companies: '71%', source: 'Corporate University Best Practices 2024' },
    { metric: 'Customer Satisfaction', improvement: '+15%', companies: '59%', source: 'Training Impact Analysis 2024' }
  ];

  const challengesData = [
    { challenge: 'Measuring Training Effectiveness', percentage: 68, severity: 'high' },
    { challenge: 'Budget Constraints', percentage: 61, severity: 'high' },
    { challenge: 'Time Away from Work', percentage: 54, severity: 'medium' },
    { challenge: 'Technology Adoption', percentage: 47, severity: 'medium' },
    { challenge: 'Content Relevance', percentage: 42, severity: 'medium' },
    { challenge: 'Manager Support', percentage: 38, severity: 'low' }
  ];

  const getMarketSegmentIcon = (segment: string) => {
    switch (segment) {
      case 'Enterprise': return <Building2 className="w-4 h-4" />;
      case 'SMB to Enterprise': return <TrendingUp className="w-4 h-4" />;
      case 'SMB to Mid-market': return <Target className="w-4 h-4" />;
      case 'Mid-market to Enterprise': return <BarChart3 className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'must-have': return 'bg-red-50 text-red-700 border-red-200';
      case 'performance': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'delighter': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPriceSegment = (price: number) => {
    if (price < 200) return 'SMB';
    if (price <= 600) return 'Mid-Market';
    return 'Enterprise';
  };

  const getPriceColor = (price: number) => {
    if (price < 200) return 'bg-green-50 text-green-700 border-green-200';
    if (price <= 600) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-red-50 text-red-700 border-red-200';
  };

  const FeatureDetailPopup = ({ feature, platform, featureData }: { feature: any, platform: string, featureData: any }) => {
    // Calculate market analysis
    const allPlatforms = ['honeAI', 'betterUp', 'lifeLabs', 'strive', 'thinkific', 'absorb', 'mursion', 'monark', 'udemy'];
    const hasFeature = allPlatforms.filter(p => {
      const value = feature[p]?.value;
      return value === 'Yes' || value === 'High';
    }).length;
    const doesntHave = allPlatforms.filter(p => {
      const value = feature[p]?.value;
      return value === 'No' || value === 'Low' || value === 'Low*';
    }).length;
    const marketAdoption = Math.round((hasFeature / allPlatforms.length) * 100);

    const getStatusColor = (value: string) => {
      if (value === 'Yes' || value === 'High') return 'text-green-600 bg-green-50 border-green-200';
      if (value === 'Medium' || value === 'Medium*') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      if (value === 'Low' || value === 'Low*') return 'text-red-600 bg-red-50 border-red-200';
      if (value === 'No') return 'text-gray-600 bg-gray-50 border-gray-200';
      return 'text-blue-600 bg-blue-50 border-blue-200';
    };

    const getRecommendation = () => {
      if (marketAdoption >= 80) return 'Market Standard: All competitors have this feature. Ensure parity to remain competitive.';
      if (marketAdoption >= 50) return 'Common Feature: Most competitors offer this. Consider implementation for competitive advantage.';
      if (marketAdoption >= 20) return 'Emerging Feature: Some competitors offer this. Potential differentiation opportunity.';
      return 'Rare Feature: Few competitors offer this. Strong differentiation potential.';
    };

    return (
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {feature.feature}
            <Badge className={getCategoryColor(feature.category)}>
              {feature.category.replace('-', ' ').toUpperCase()}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Feature Description */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Feature Description</h4>
            <p className="text-gray-700">{feature.benefit}</p>
          </div>

          {/* Customer Benefit */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Customer Benefit</h4>
            <p className="text-gray-700">{feature.benefit}</p>
          </div>

          {/* Competitive Position */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Competitive Position</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(feature).filter(([key]) => 
                !['feature', 'category', 'benefit'].includes(key)
              ).map(([key, data]: [string, any]) => {
                const platformNames: Record<string, string> = {
                  honeAI: 'Hone AI',
                  betterUp: 'BetterUp', 
                  lifeLabs: 'LifeLabs Learning',
                  strive: 'Strive',
                  thinkific: 'Thinkific',
                  absorb: 'Absorb LMS',
                  mursion: 'Mursion',
                  monark: 'Monark',
                  udemy: 'Udemy'
                };
                
                return (
                  <div key={key} className={`p-3 rounded-lg border ${getStatusColor(data.value)}`}>
                    <div className="font-medium">{platformNames[key]}</div>
                    <div className="text-sm flex items-center justify-between">
                      <span>{data.value}</span>
                      <a 
                        href={data.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Market Analysis */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Market Analysis</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{hasFeature}/9</div>
                <div className="text-sm text-gray-600">Have Feature</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-600">{doesntHave}/9</div>
                <div className="text-sm text-gray-600">Don't Have</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{marketAdoption}%</div>
                <div className="text-sm text-gray-600">Market Adoption</div>
              </div>
            </div>
          </div>

          {/* Source Documentation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Source Documentation</h4>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Source 1: Research Documentation</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 mt-1">product documentation</p>
            </div>
          </div>

          {/* Strategic Recommendation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Strategic Recommendation</h4>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-700">{getRecommendation()}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    );
  };

  const renderFeatureValue = (feature: any, platform: string, featureData: any) => {
    const value = featureData.value;
    console.log(`Rendering value for ${feature.feature} - ${platform}: "${value}"`);
    
    const baseClasses = "text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity";
    
    const getValueClasses = (val: string) => {
      // Normalize the value to handle any variations
      const normalizedVal = val?.toString().toLowerCase().trim();
      console.log(`Normalized value: "${normalizedVal}"`);
      
      if (normalizedVal === 'yes' || normalizedVal === 'yes*') return `${baseClasses} text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200`;
      if (normalizedVal === 'no' || normalizedVal === 'no*') return `${baseClasses} text-gray-400`;
      if (normalizedVal === 'high') return `${baseClasses} text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200`;
      if (normalizedVal === 'medium' || normalizedVal === 'medium*') return `${baseClasses} text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200`;
      if (normalizedVal === 'low' || normalizedVal === 'low*') return `${baseClasses} text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200`;
      return `${baseClasses} text-blue-600 underline`;
    };

    const getDisplayValue = (val: string) => {
      const normalizedVal = val?.toString().toLowerCase().trim();
      if (normalizedVal === 'yes' || normalizedVal === 'yes*') return '✓ Yes';
      if (normalizedVal === 'no' || normalizedVal === 'no*') return '-';
      return val;
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className={getValueClasses(value)}>
            {getDisplayValue(value)}
          </div>
        </DialogTrigger>
        <FeatureDetailPopup feature={feature} platform={platform} featureData={featureData} />
      </Dialog>
    );
  };

  // Group features by category - Fixed TypeScript syntax
  const groupedFeatures = featureMatrix.reduce((acc: Record<string, any[]>, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {});

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'must-have': return 'MUST-HAVE FEATURES';
      case 'performance': return 'PERFORMANCE BENEFITS';
      case 'delighter': return 'DELIGHTER FEATURES';
      default: return category.toUpperCase();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'must-have': return '●';
      case 'performance': return '●';
      case 'delighter': return '●';
      default: return '●';
    }
  };

  const getCategoryIconColor = (category: string) => {
    switch (category) {
      case 'must-have': return 'text-purple-600';
      case 'performance': return 'text-orange-600';
      case 'delighter': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const PlatformDetailPopup = ({ platform }: { platform: any }) => (
    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: platform.color }}></div>
          {platform.name}
          <Badge variant="outline" className="text-xs">{platform.size}</Badge>
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Market Target</h4>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              {getMarketSegmentIcon(platform.target)}
              {platform.target}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Focus Area</h4>
            <p className="text-sm text-gray-700">{platform.focus}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Funding</h4>
            <Badge variant="secondary" className="text-xs">{platform.funding}</Badge>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
            <div className="flex items-center gap-2">
              <Badge className={`text-xs ${getPriceColor(platform.price)}`}>
                ${platform.price}/user/year
              </Badge>
              <span className="text-xs text-gray-500">({getPriceSegment(platform.price)})</span>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Key Differentiators</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="text-sm text-gray-700 space-y-2">
              {platform.differentiators.map((diff: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partnerships & Customers */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Notable Partnerships & Customers</h4>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">{platform.partnerships}</span>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Market Position</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-gray-900">{platform.size}</div>
              <div className="text-xs text-gray-600">Company Size</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">${platform.price}</div>
              <div className="text-xs text-gray-600">Price/User/Year</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{getPriceSegment(platform.price)}</div>
              <div className="text-xs text-gray-600">Target Segment</div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <Tabs defaultValue="competitive" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full max-w-lg bg-white border border-gray-200">
            <TabsTrigger value="competitive" className="data-[state=active]:bg-gray-100">Competitive Analysis</TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-gray-100">Market Research</TabsTrigger>
          </TabsList>

          {/* Competitive Analysis Tab - keep exactly the same */}
          <TabsContent value="competitive" className="space-y-6">
            {/* Header */}
            <div className="mb-8 border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Competitive Analysis Report
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">Management Training Platforms</p>
                  <Badge variant="outline" className="text-sm text-gray-500">
                    Methodology: Feature evaluation based on publicly available information (June 2025)
                  </Badge>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>Report Date: June 2025</p>
                  <p>Platforms Analyzed: 9</p>
                </div>
              </div>
            </div>

            {/* Market Insights Section */}
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <CardHeader className="border-b border-blue-200">
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Market Insights
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Key findings from our competitive analysis of 9 management training platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-gray-900">Enterprise Dominance</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Most platforms target enterprise customers, with BetterUp leading in funding ($1.7B valuation)
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">AI Innovation</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Voice-first AI coaching (Hone AI) and VR simulations (Mursion) represent cutting-edge differentiators
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Thinkific leads in overall satisfaction (4.6/5), particularly in ease of use and value for money
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900">Pricing Strategy</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Clear segmentation: SMB-focused platforms under $200/user, Enterprise solutions $600+/user
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Feature Gaps</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Only 2/9 platforms offer VR training, and voice-first AI coaching is limited to 2 platforms
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold text-gray-900">Market Opportunity</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Mid-market segment ($200-600) shows less competition with only 4 platforms actively targeting this space
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  Platform Overview & Market Position
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Click on any platform card to see detailed analysis including pricing, differentiators, and partnerships
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <PlatformList platforms={platformData} />
              </CardContent>
            </Card>

            {/* Customer Satisfaction Section */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Star className="w-5 h-5 text-gray-600" />
                  Customer Satisfaction Scores
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Based on reviews from G2, Capterra, and TrustRadius
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <SatisfactionChart data={satisfactionData} />
              </CardContent>
            </Card>

            {/* Features Section - moved from Features tab */}
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Feature Comparison Matrix</h2>
                </div>
                <p className="text-gray-600 text-sm">
                  Click on any feature value to see detailed analysis and competitive positioning
                </p>
              </div>
              
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="must-have">Must-Have</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                      <SelectItem value="delighter">Delighter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <FeatureMatrix matrix={featureMatrix} />
              </div>
            </div>
          </TabsContent>

          {/* Market Research Tab */}
          <TabsContent value="market" className="space-y-6">
            {/* Header */}
            <div className="mb-8 border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Market Research Dashboard
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">Leadership Development & Corporate Training Analytics</p>
                  <Badge variant="outline" className="text-sm text-gray-500">
                    Data Sources: Training Industry, Deloitte, Brandon Hall Group, ATD (2024)
                  </Badge>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>Last Updated: June 2025</p>
                  <p>Sources Analyzed: 12+</p>
                </div>
              </div>
            </div>

            {/* Key Market Insights - moved to top */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mb-8">
              <CardHeader className="border-b border-blue-200">
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  Key Market Insights & Trends
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Strategic findings from comprehensive market research analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Market Growth</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Corporate training market growing at 15.2% annually, with leadership development representing 17.8% of total investment
                    </p>
                    <Badge variant="outline" className="text-xs">Training Industry Report 2024</Badge>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Digital Transformation</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      89% of organizations now use digital learning platforms, with instructor-led online training being the preferred delivery method (34%)
                    </p>
                    <Badge variant="outline" className="text-xs">Deloitte Learning Report 2024</Badge>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <UserCheck className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">ROI Focus</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Organizations with strong leadership development programs report 23% higher employee retention and 31% better engagement scores
                    </p>
                    <Badge variant="outline" className="text-xs">Harvard Business Review 2024</Badge>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900">Implementation Challenges</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      68% of organizations struggle with measuring training effectiveness, while only 42% effectively track ROI from leadership programs
                    </p>
                    <Badge variant="outline" className="text-xs">ATD State of Industry 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {marketInsightsData.map((insight, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-gray-600">{insight.category}</CardTitle>
                      {insight.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold" style={{ color: insight.color }}>
                        {insight.value}
                      </div>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3 text-blue-600" />
                        <span className="text-xs text-blue-600">{insight.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Training Spending Trends */}
            <Card className="mb-8 bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  Corporate Training Investment Trends
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Annual spending on corporate training and leadership development programs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-80 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trainingSpendData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" fontSize={12} />
                      <YAxis yAxisId="left" fontSize={12} label={{ value: 'Spending ($B)', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" fontSize={12} label={{ value: 'Leadership %', angle: 90, position: 'insideRight' }} />
                      <Tooltip 
                        formatter={(value, name) => [
                          name === 'spending' ? `$${value}B` : `${value}%`,
                          name === 'spending' ? 'Total Training Spending' : 'Leadership Development %'
                        ]}
                        labelStyle={{ color: '#374151' }}
                        contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                      />
                      <Legend />
                      <Bar yAxisId="left" dataKey="spending" fill="#3B82F6" name="Total Training Spending ($B)" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="leaders" stroke="#10B981" strokeWidth={3} name="Leadership Development %" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$505B</div>
                    <div className="text-sm text-gray-600">2024 Total Spending</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+15.2%</div>
                    <div className="text-sm text-gray-600">YoY Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">17.8%</div>
                    <div className="text-sm text-gray-600">Leadership Focus</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border border-gray-200">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Brain className="w-5 h-5 text-gray-600" />
                    Learning Delivery Preferences
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    How organizations prefer to deliver training content
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-64 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={learningPreferencesData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${value}%`}
                        >
                          {learningPreferencesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Preference']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {learningPreferencesData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <AlertCircle className="w-5 h-5 text-gray-600" />
                    Implementation Challenges
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Top obstacles organizations face in training delivery
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {challengesData.map((challenge, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{challenge.challenge}</span>
                          <span className="text-sm font-bold text-gray-900">{challenge.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              challenge.severity === 'high' ? 'bg-red-500' :
                              challenge.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${challenge.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Training ROI Impact */}
            <Card className="mb-8 bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Award className="w-5 h-5 text-gray-600" />
                  Training ROI & Business Impact
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Measured improvements from leadership development programs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-gray-200">
                        <TableHead className="text-left font-semibold text-gray-700">Business Metric</TableHead>
                        <TableHead className="text-center font-semibold text-gray-700">Average Improvement</TableHead>
                        <TableHead className="text-center font-semibold text-gray-700">Companies Reporting</TableHead>
                        <TableHead className="text-left font-semibold text-gray-700">Data Source</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roiMetricsData.map((metric, index) => (
                        <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <TableCell className="font-medium text-gray-900">{metric.metric}</TableCell>
                          <TableCell className="text-center">
                            <Badge className="bg-green-50 text-green-700 border-green-200">
                              {metric.improvement}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center text-gray-700">{metric.companies}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <ExternalLink className="w-3 h-3 text-blue-600" />
                              <span className="text-xs text-blue-600">{metric.source}</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <MarketInsights employeeImpact={employeeImpact} retentionImpact={retentionImpact} criticalInsights={criticalInsights} />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500">
            Market research data compiled from industry reports, surveys, and academic studies
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Sources: Training Industry, Deloitte, Brandon Hall Group, ATD, Harvard Business Review, McKinsey, Gallup (2024)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveReport;
