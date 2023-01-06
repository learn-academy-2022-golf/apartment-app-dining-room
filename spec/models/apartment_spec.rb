require 'rails_helper'
RSpec.describe "Apartments", type: :request do
    it "should validate street" do
        apartment = Apartment.create
        expect(apartment.errors[:street]).to_not  be_empty
    end

    it "should validate city" do
        apartment = Apartment.create
        expect(apartment.errors[:city]).to_not  be_empty
    end

    it "should validate state" do
        apartment = Apartment.create
        expect(apartment.errors[:state]).to_not  be_empty
    end

    it "should validate manager" do
        apartment = Apartment.create
        expect(apartment.errors[:manager]).to_not  be_empty
    end

    it "should validate email" do
        apartment = Apartment.create
        expect(apartment.errors[:email]).to_not  be_empty
    end

    it "should validate price" do
        apartment = Apartment.create
        expect(apartment.errors[:price]).to_not  be_empty
    end

    it "should validate bedrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bedrooms]).to_not  be_empty
    end

    it "should validate bathrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bathrooms]).to_not  be_empty
    end

    it "should validate pets" do
        apartment = Apartment.create
        expect(apartment.errors[:pets]).to_not  be_empty
    end

    it "should validate image" do
        apartment = Apartment.create
        expect(apartment.errors[:image]).to_not  be_empty
    end

    it "should validate user_id" do
        apartment = Apartment.create
        expect(apartment.errors[:user_id]).to_not  be_empty
    end
end