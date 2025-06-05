import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FeatureMatrixRow } from '@/lib/reportData';

interface FeatureMatrixProps {
  matrix: FeatureMatrixRow[];
}

const FeatureMatrix: React.FC<FeatureMatrixProps> = ({ matrix }) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Benefit</TableHead>
          <TableHead>Hone AI</TableHead>
          <TableHead>BetterUp</TableHead>
          <TableHead>LifeLabs</TableHead>
          <TableHead>Strive</TableHead>
          <TableHead>Thinkific</TableHead>
          <TableHead>Absorb</TableHead>
          <TableHead>Mursion</TableHead>
          <TableHead>Monark</TableHead>
          <TableHead>Udemy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matrix.map((row, idx) => (
          <TableRow key={idx}>
            <TableCell>{row.feature}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.benefit}</TableCell>
            <TableCell>{row.honeAI.value}</TableCell>
            <TableCell>{row.betterUp.value}</TableCell>
            <TableCell>{row.lifeLabs.value}</TableCell>
            <TableCell>{row.strive.value}</TableCell>
            <TableCell>{row.thinkific.value}</TableCell>
            <TableCell>{row.absorb.value}</TableCell>
            <TableCell>{row.mursion.value}</TableCell>
            <TableCell>{row.monark.value}</TableCell>
            <TableCell>{row.udemy.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default FeatureMatrix; 