require "rails_helper"
RSpec.describe "Apartments", type: :request do
    describe "GET /index" do
      it "gets a list of apartments " do
      
        user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
        user.apartments.create(
          street: "Pine Island Ave.",
          city:"Spectacular",
          state:"CA",
          manager:"Garrett Graham",
          email:"graham.g@aol.com", 
          price:"1M", 
          bedrooms:2, 
          bathrooms:1, 
          pets:"yes",
          image:"url", 
          user_id:1
        )
        # Make a request
        get '/apartments'
        apartments = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartments.length).to eq 1
      end
    end
  end

