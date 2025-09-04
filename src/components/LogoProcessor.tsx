import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  const processLogo = async () => {
    setIsProcessing(true);
    try {
      // Load the current logo
      const logoUrl = '/lovable-uploads/52a81929-9898-4f44-b3c2-5e10e17ae8da.png';
      const imageElement = await loadImageFromUrl(logoUrl);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(processedUrl);
      
      // Create download link
      const link = document.createElement('a');
      link.href = processedUrl;
      link.download = 'miketur-logo-no-bg.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Logo background removed successfully!');
    } catch (error) {
      console.error('Error processing logo:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-background border border-border rounded-lg p-4 shadow-lg">
      <h3 className="text-sm font-medium mb-2">Logo Processor</h3>
      <Button 
        onClick={processLogo} 
        disabled={isProcessing}
        size="sm"
      >
        {isProcessing ? 'Processing...' : 'Remove Logo Background'}
      </Button>
      
      {processedImageUrl && (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground mb-1">Processed logo preview:</p>
          <img 
            src={processedImageUrl} 
            alt="Processed logo" 
            className="w-20 h-auto border border-border rounded"
          />
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;