import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Copy, Check, CreditCard, Building2, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

const DonationSection = () => {
  const [copiedField, setCopiedField] = useState('');

  const bankDetails = {
    iban: 'LT26 3250 0291 3196 9055',
    bic: 'REVOLT21',
    bank: 'Revolut',
    recipient: 'Mercedes 124 Restoration Project'
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section id="donation-section" className="donation-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">SUPPORT THE DREAM</span>
          <h2 className="section-title">Help Bring This Legend Back to Life</h2>
          <p className="section-subtitle">
            Every contribution, no matter the size, brings us closer to seeing this beauty on the road again
          </p>
        </div>

        <Tabs defaultValue="bank" className="donation-tabs">
          <TabsList className="vintage-tabs-list">
            <TabsTrigger value="bank" className="vintage-tab">
              <Building2 className="tab-icon" />
              Bank Transfer
            </TabsTrigger>
            <TabsTrigger value="card" className="vintage-tab">
              <CreditCard className="tab-icon" />
              Card Payment
            </TabsTrigger>
            <TabsTrigger value="mobile" className="vintage-tab">
              <Smartphone className="tab-icon" />
              Mobile Payment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bank" className="tab-content">
            <Card className="donation-card">
              <div className="donation-header">
                <Building2 className="donation-icon" />
                <h3 className="donation-title">Direct Bank Transfer</h3>
                <p className="donation-subtitle">Transfer directly to our Revolut account</p>
              </div>

              <div className="bank-details">
                <div className="bank-detail-row">
                  <div className="detail-label">IBAN</div>
                  <div className="detail-value-container">
                    <div className="detail-value">{bankDetails.iban}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.iban, 'IBAN')}
                      className="copy-button"
                    >
                      {copiedField === 'IBAN' ? (
                        <Check className="icon-sm" />
                      ) : (
                        <Copy className="icon-sm" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bank-detail-row">
                  <div className="detail-label">BIC / SWIFT</div>
                  <div className="detail-value-container">
                    <div className="detail-value">{bankDetails.bic}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.bic, 'BIC/SWIFT')}
                      className="copy-button"
                    >
                      {copiedField === 'BIC/SWIFT' ? (
                        <Check className="icon-sm" />
                      ) : (
                        <Copy className="icon-sm" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bank-detail-row">
                  <div className="detail-label">Bank</div>
                  <div className="detail-value-container">
                    <div className="detail-value">{bankDetails.bank}</div>
                  </div>
                </div>

                <div className="bank-detail-row">
                  <div className="detail-label">Recipient</div>
                  <div className="detail-value-container">
                    <div className="detail-value">{bankDetails.recipient}</div>
                  </div>
                </div>
              </div>

              <div className="donation-note">
                <p>Please include "Mercedes 124 Restoration" in the payment reference</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="card" className="tab-content">
            <Card className="donation-card">
              <div className="donation-header">
                <CreditCard className="donation-icon" />
                <h3 className="donation-title">Card Payment</h3>
                <p className="donation-subtitle">Quick and secure payment with your card</p>
              </div>

              <div className="coming-soon-container">
                <div className="coming-soon-badge">Coming Soon</div>
                <p className="coming-soon-text">
                  We're setting up Stripe integration for secure card payments. 
                  In the meantime, please use bank transfer or contact us directly.
                </p>
                <Button className="vintage-button-outline" onClick={() => {
                  document.querySelector('[value="bank"]').click();
                }}>
                  Use Bank Transfer Instead
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="tab-content">
            <Card className="donation-card">
              <div className="donation-header">
                <Smartphone className="donation-icon" />
                <h3 className="donation-title">Mobile Payment</h3>
                <p className="donation-subtitle">Pay via PayPal or other mobile payment apps</p>
              </div>

              <div className="coming-soon-container">
                <div className="coming-soon-badge">Coming Soon</div>
                <p className="coming-soon-text">
                  PayPal and mobile payment options are being set up. 
                  For now, please use our Revolut bank transfer option above.
                </p>
                <Button className="vintage-button-outline" onClick={() => {
                  document.querySelector('[value="bank"]').click();
                }}>
                  Use Bank Transfer Instead
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="donation-tiers">
          <h3 className="tiers-title">Suggested Contribution Levels</h3>
          <div className="tiers-grid">
            <Card className="tier-card">
              <div className="tier-amount">€25</div>
              <div className="tier-name">Oil Change</div>
              <p className="tier-description">Help keep the dream alive with basic maintenance</p>
            </Card>
            <Card className="tier-card featured">
              <div className="tier-badge">Popular</div>
              <div className="tier-amount">€100</div>
              <div className="tier-name">Part Sponsor</div>
              <p className="tier-description">Fund a genuine Mercedes part for the restoration</p>
            </Card>
            <Card className="tier-card">
              <div className="tier-amount">€500</div>
              <div className="tier-name">Major Component</div>
              <p className="tier-description">Make a significant impact on the restoration</p>
            </Card>
            <Card className="tier-card">
              <div className="tier-amount">Custom</div>
              <div className="tier-name">Your Choice</div>
              <p className="tier-description">Any amount helps bring this dream to reality</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
