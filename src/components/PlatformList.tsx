import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import { Platform } from '@/lib/reportData';

interface PlatformListProps {
  platforms: Platform[];
}

const PlatformList: React.FC<PlatformListProps> = ({ platforms }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {platforms.map((platform) => (
      <Card key={platform.name} className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
            {platform.name}
            <Badge variant="outline" className="text-xs">{platform.size}</Badge>
          </CardTitle>
          <CardDescription>{platform.focus}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Target:</span> {platform.target}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Funding:</span> {platform.funding}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Price:</span> ${platform.price}/user/year
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{platform.partnerships}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default PlatformList; 