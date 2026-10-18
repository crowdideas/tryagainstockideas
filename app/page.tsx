'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Send, FileText } from 'lucide-react';

export default function Dashboard() {
  const reports = [
    { id: 1, stock: 'HDFC Bank', score: 9.4, date: '26 Sep 2026' },
    { id: 2, stock: 'TCS', score: 8.7, date: '26 Sep 2026' },
    { id: 3, stock: 'Larsen & Toubro', score: 8.6, date: '26 Sep 2026' },
    { id: 4, stock: 'Suzlon Energy', score: 8.5, date: '26 Sep 2026' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800 bg-zinc-950 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl">📈</div>
          <h1 className="text-3xl font-bold tracking-tight">StockPulse</h1>
        </div>
        <div className="flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700" disabled>
            <Download className="w-4 h-4 mr-2" /> Weekly PDF
          </Button>
          <Button variant="outline" disabled>
            <Send className="w-4 h-4 mr-2" /> Send to Telegram
          </Button>
        </div>
      </nav>

      <div className="p-8 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Top Consensus Stocks (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stock</TableHead>
                  <TableHead>Relative Strength Score</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.stock}</TableCell>
                    <TableCell className="text-green-400 font-medium">{report.score}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" onClick={() => alert(`Detailed report for ${report.stock} will be ready soon!`)}>
                        <FileText className="w-4 h-4 mr-2" /> Detailed Report
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}