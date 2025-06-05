
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BarChart3, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Competitive Analysis Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your markdown reports into beautiful, interactive visualizations with comprehensive data insights and modern design.
          </p>
          <Button 
            onClick={() => navigate('/report')} 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            <FileText className="w-5 h-5 mr-2" />
            View Competitive Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Interactive Charts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Dynamic visualizations including bar charts, radar charts, and pricing comparisons
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Platform Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Comprehensive comparison of 9 management training platforms across key metrics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Key differentiators, funding information, and strategic market positioning
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Detailed Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Feature matrices, customer satisfaction scores, and pricing tier analysis
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">What's Included in the Report</CardTitle>
            <CardDescription className="text-lg">
              Comprehensive analysis across multiple dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Data & Metrics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Platform overview and market positioning</li>
                  <li>• Pricing tier analysis across market segments</li>
                  <li>• Feature comparison matrix (17 key features)</li>
                  <li>• Customer satisfaction scores</li>
                  <li>• Recent funding and partnership information</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Visualizations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interactive bar charts for pricing analysis</li>
                  <li>• Radar charts for satisfaction metrics</li>
                  <li>• Categorized feature comparisons</li>
                  <li>• Market segment breakdown</li>
                  <li>• Key differentiator highlights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
