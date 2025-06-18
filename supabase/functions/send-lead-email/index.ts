
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formData, formType } = await req.json();
    
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not found');
    }

    // Create email content based on form type
    let emailContent = '';
    let subject = 'New Lead from echiropartners.com';

    if (formType === 'demo') {
      emailContent = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Business:</strong> ${formData.business}</p>
        <p><strong>Practice Size:</strong> ${formData.practiceSize || 'Not specified'}</p>
        <p><strong>Current EMR:</strong> ${formData.currentEMR || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${formData.preferredTime || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message || 'None'}</p>
      `;
    } else {
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Business:</strong> ${formData.business}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `;
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'EChiroPartners <noreply@resend.dev>',
        to: ['digitalmar@actclinic.com'],
        subject: subject,
        html: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Email sending failed: ${errorData.message}`);
    }

    const result = await emailResponse.json();
    console.log('Email sent successfully:', result);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in send-lead-email function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
