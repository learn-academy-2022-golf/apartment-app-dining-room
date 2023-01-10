require "rails_helper"
RSpec.describe "Apartments", type: :request do

  current_user = User.first_or_create!(email: 'dean@example.com', password: 'password', password_confirmation: 'password')
  let(:valid_attributes) do
    {
      "street"=> "Pine Island Ave.",
          "city" => "Spectacular",
          "state" => "CA",
          "manager" =>"Garrett Graham",
          "email" => "graham.g@aol.com", 
          "price"=>"1M", 
          "bedrooms"=>2, 
          "bathrooms"=>1, 
          "pets"=>"yes",
          "image"=>"url" 
         
    }
  end

  let(:invalid_attributes) do
    {
      "street"=> "",
          "city" => "",
          "state" => "",
          "manager" =>"",
          "email" => "", 
          "price"=>"", 
          "bedrooms"=> 0,
          "bathrooms"=> 0, 
          "pets"=>"",
          "image"=>""
         
    }
  end
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
        it "checks for 404 error" do
          User.create(
          email:'test@test.com', 
          password:'123456789', 
          password_confirmation:'123456789') 
          user=User.first 
          
          apartment_params = {
            street: "",
            city:"",
            state:"",
            manager:"",
            email:"", 
            price:2000,
            bedrooms:2, 
            bathrooms:1, 
            pets:"yes",
            image:"https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.gobankingrates.com%2Fwp-content%2Fuploads%2F2019%2F07%2FBeautiful-luxury-home-exterior-iStock-1054759884.jpg",
            user_id:user.id
            }
            post '/apartments', params:{apartment: apartment_params}
            expect(response).to have_http_status(422)
           
            
          end
      end
      describe 'PATCH /update' do
        context 'with valid parameters' do
          let(:new_attributes) do
            {
          "street" =>  "Pine Island Ave.",
          "city" => "Spectacular",
          "state" => "Wisconsin",
          "manager" => "Garrett Graham",
          "email" => "graham.g@aol.com", 
          "price"=>"1M", 
          "bedrooms"=>2, 
          "bathrooms"=>1, 
          "pets"=>"yes",
          "image"=>"url" 
        
            }
          end
    
          it 'updates the requested post' do
            apartment = Apartment.new(valid_attributes)
            apartment.user = current_user
            apartment.save
            patch apartment_url(apartment), params: { apartment: new_attributes }
            apartment.reload
            expect(response).to have_http_status(200)
            expect(apartment.state).to eq 'Wisconsin'
          end
        end
        context 'with invalid parameters' do
          it "shows an invalid error message and can not update" do
            apartment = Apartment.new(valid_attributes)
            apartment.user = current_user
            apartment.save
            patch apartment_url(apartment), params: { apartment: invalid_attributes }
            json = JSON.parse(response.body)
            expect(json['city']).to include "can't be blank"
            expect(response).to have_http_status(422)
          end
        end
      end

      describe 'DELETE /destroy' do
        it 'destroys the requested post' do
          apartment = Apartment.new(valid_attributes)
          apartment.user = current_user
          apartment.save
          expect do
            delete apartment_url(apartment)
          end.to change(Apartment, :count).by(-1)
        end
      end
    end

