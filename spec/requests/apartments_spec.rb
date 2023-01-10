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
    describe "POST /create" do
      it "creates a new apartment" do
        User.create(
        email:'test@test.com', 
        password:'123456789', 
        password_confirmation:'123456789') 
        user=User.first 
        
        apartment_params = {
          street: "Candy Cane Ln.",
          city:"Windy",
          state:"FL",
          manager:"Timmy Turner",
          email:"Timmyg@aol.com", 
          price:2000,
          bedrooms:2, 
          bathrooms:1, 
          pets:"yes",
          image:"https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.gobankingrates.com%2Fwp-content%2Fuploads%2F2019%2F07%2FBeautiful-luxury-home-exterior-iStock-1054759884.jpg",
          user_id:user.id
          }
          post '/apartments', params:{apartment: apartment_params}
          expect(response).to have_http_status(200)
          apartment=Apartment.last
          expect(apartment.street).to eq "Candy Cane Ln."
          expect(Apartment.count).to eq 1
          
        end
      end
    end

