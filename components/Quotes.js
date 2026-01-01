import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quotes() {

  const [quoteFetched, setquoteFetched] = useState(false);
  const [todayQuote, setTodayQuote] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  // To handle API loading and error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get('https://quotes-api-self.vercel.app/quote');
      setTodayQuote(response.data.quote);
      setQuoteAuthor(response.data.author);
      setquoteFetched(true);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError(true);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchAnotherQuote = () => {
    fetchData();
  }

  return (
    <View className="flex-1 bg-slate-100 justify-center px-5">

      {/* Title */}
      <Text className="text-3xl font-bold text-center text-blue-500 mb-6">Today's Quote</Text>

      {/* Quote Card */}
      <View className="bg-white rounded-2xl p-6 shadow-md border border-blue-200">
        <Text className="text-xl text-gray-800 text-center leading-relaxed">
          {loading
            ? "Fetching Today's Quote..."
            : error
              ? "Something went wrong. Please try again."
              : todayQuote
          }
        </Text>

        {/* Author */}
        <Text className="text-right text-gray-500 mt-4 italic">
          {loading ? "" : error ? "" : `- ${quoteAuthor}`}
        </Text>
      </View>

      <TouchableOpacity className="mt-8 bg-blue-500 py-4 rounded-xl shadow-sm active:bg-blue-600" onPress={fetchAnotherQuote} disabled={loading}>
        <Text className="text-white text-lg font-semibold text-center">
          {loading ? "Fetching..." : "Fetch Another Quote"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}