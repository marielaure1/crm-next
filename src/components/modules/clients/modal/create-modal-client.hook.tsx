"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createClientDto } from "@dtos/clients/create-client.dto";
import api from "@api/index";
import { apiClient } from "@api/configs/axios-global";
import { CarouselApi } from "@ui/shadcn/ui/carousel";
import { useTranslation } from 'react-i18next';

enum ClientSource {
    google = 'google',
    website = 'website',
    socialMedia = 'socialMedia',
    onlineAdvertising = 'onlineAdvertising',
    wordOfMouth = 'wordOfMouth',
    partnerships = 'partnerships',
    events = 'events',
    emailMarketing = 'emailMarketing',
    forums = 'forums',
    searchEngineOptimization = 'searchEngineOptimization'
  }


interface ClientSourceProps{
    value: ClientSource;
    label: string;
}
const clientSources: ClientSourceProps[] = [
    { value: ClientSource.google, label: 'Google' },
    { value: ClientSource.website, label: 'Site web' },
    { value: ClientSource.socialMedia, label: 'Réseaux sociaux' },
    { value: ClientSource.onlineAdvertising, label: 'Publicité en ligne' },
    { value: ClientSource.wordOfMouth, label: 'Mouvement de bouche'},
    { value: ClientSource.partnerships, label: 'Partenariats'},
    { value: ClientSource.events, label: 'Événements'},
    { value: ClientSource.emailMarketing, label: 'Marketing par email'},
    { value: ClientSource.forums, label: 'Forums / Communautés'},
    { value: ClientSource.searchEngineOptimization, label: 'Référencement naturel (SEO)'}
]

export const useCreateModalClient = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [searchAddress, setSearchAddress] = useState("");
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState({});
    const [apiCarousel, setApiCarousel] = useState<CarouselApi>()

    const form = useForm({
        resolver: zodResolver(createClientDto),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            source: "",
            mainContactId: "",
            managerContactId: "",
        },
    });

    const fields = [
        // Step 1
        { step: 1, type: "input", label: t("name").toUpperCase(), name: "name", placeholder: "Enter name" },
        { step: 1, type: "input", label: "Email", name: "email", placeholder: "Enter email" },
        { step: 1, type: "input", label: "Phone", name: "phone", placeholder: "Enter phone number" },
        { step: 1, type: "select", label: "Source", name: "source", options: clientSources },
        // Step 2
        { step: 2, type: "input", label: "Address Line 1", name: "addressLine1", placeholder: "Enter address line 1" },
        { step: 2, type: "input", label: "Address Line 2", name: "addressLine2", placeholder: "Enter address line 2" },
        { step: 2, type: "input", label: "City", name: "city", placeholder: "Enter city" },
        { step: 2, type: "input", label: "State", name: "state", placeholder: "Enter state" },
        { step: 2, type: "input", label: "ZIP Code", name: "zipCode", placeholder: "Enter ZIP Code" },
        { step: 2, type: "input", label: "Country", name: "country", placeholder: "Enter country" },
        // Step 3
        {
        step: 3,
        type: "combobox",
        label: "Main Contact",
        name: "mainContactId",
        options: [
            { value: "contact1", label: "Contact 1" },
            { value: "contact2", label: "Contact 2" },
            { value: "contact3", label: "Contact 3" },
        ],
        placeholder: "Select a main contact...",
        },
        {
        step: 3,
        type: "combobox",
        label: "Manager Contact",
        name: "managerContactId",
        options: [
            { value: "manager1", label: "Manager 1" },
            { value: "manager2", label: "Manager 2" },
            { value: "manager3", label: "Manager 3" },
        ],
        placeholder: "Select a manager contact...",
        },
    ];

    const onSubmit = async (data: any) => {
        try {
            const response = await api.clients.create(data);
            if (response?.success) {
              const data = response.data;
            }
          } catch (error) {
            //console.log(error);
          }
    };

    const goToNextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const goToPreviousStep = () => setStep((prev) => Math.max(prev - 1, 1));

    async function getAddressSuggestions() {
        try {
            if(searchAddress.length < 4) return;
            setAddressSuggestions([])
            const response = await apiClient.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchAddress)}&addressdetails=1&limit=10`)
            if(response?.data){
                console.log(response.data);
                setAddressSuggestions([]);

                response.data.forEach((data) => {
                    const address = data.address;
                    let addressLine1 = "";

                    if(address?.house_number && address?.road){
                        addressLine1 = `${address.house_number} ${address.road}`;
                    }

                    const row = {
                        label: data.display_name,
                        value: {
                            addressLine1: addressLine1,
                            addressLine2: address.suburb,
                            zipCode: address.postcode,
                            city: address.town,
                            state: address.state,
                            country: address.country,
                        }
                    }

                    setAddressSuggestions((prev) => [...prev, row]);
                })
                
            }
        } catch (error) {
            //console.log(error);
        }
      }

      useEffect(() => {
        if(selectedAddress){
            const vals = selectedAddress?.value;
            
            form.setValue("addressLine1", vals?.addressLine1);
            form.setValue("addressLine2", vals?.addressLine2);
            form.setValue("zipCode", vals?.zipCode);
            form.setValue("city", vals?.city);
            form.setValue("state", vals?.state);
            form.setValue("country", vals?.country);
        }
    }, [selectedAddress]);

    return {
        form,
        fields,
        onSubmit,
        goToNextStep,
        goToPreviousStep,
        step,
        searchAddress,
        setSearchAddress,
        getAddressSuggestions,
        addressSuggestions,
        setSelectedAddress,
        setApiCarousel
    }
};
